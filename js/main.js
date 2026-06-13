// ============================================
// 芜湖市区文旅导览地图 - 主程序
// ============================================

// ========== 初始化地图 ==========
const map = L.map('map', {
    center: [31.352, 118.385],  // 芜湖市中心
    zoom: 13,
    zoomControl: false
});

// 添加缩放控件
L.control.zoom({ position: 'bottomleft' }).addTo(map);

// ========== 底图配置 ==========
const baseMaps = {
    "高德地图": L.tileLayer('https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        attribution: '&copy; 高德地图'
    }),
    "高德卫星图": L.tileLayer('https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {
        attribution: '&copy; 高德地图'
    }),
    "高德标注图": L.tileLayer('https://webst01.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}', {
        attribution: '&copy; 高德地图'
    }),
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    })
};

// 默认加载高德地图（中文标注）
baseMaps["高德地图"].addTo(map);

// ========== 图层控制 ==========
L.control.layers(baseMaps, null, { position: 'topright' }).addTo(map);

// ========== 自定义图标 ==========
const icons = {
    '公园': L.divIcon({
        html: '<div style="background:#2ecc71;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 2px 8px rgba(46,204,113,0.4);border:2px solid white;">🌳</div>',
        className: '',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
    }),
    '景点': L.divIcon({
        html: '<div style="background:#f39c12;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 2px 8px rgba(243,156,18,0.4);border:2px solid white;">🏛️</div>',
        className: '',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
    }),
    '游乐园': L.divIcon({
        html: '<div style="background:#e74c3c;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 2px 8px rgba(231,76,60,0.4);border:2px solid white;">🎢</div>',
        className: '',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
    })
};

// ========== 数据存储 ==========
let allMarkers = [];
let allFeatures = [];
let markerLayer = L.layerGroup().addTo(map);
let currentFilter = '全部';

// ========== 加载数据 ==========
async function loadData() {
    try {
        const response = await fetch('data/wuhu_places.geojson');
        const data = await response.json();
        allFeatures = data.features;
        renderMarkers(allFeatures);
        updateStats(allFeatures);
        renderPlaceList(allFeatures);
    } catch (error) {
        console.error('数据加载失败:', error);
        // 如果fetch失败，使用内嵌数据
        alert('数据加载失败，请检查文件路径');
    }
}

// ========== 渲染标记 ==========
function renderMarkers(features) {
    markerLayer.clearLayers();
    allMarkers = [];

    features.forEach(feature => {
        const { name, category, intro, address, rating, opening_hours, ticket } = feature.properties;
        const coords = [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
        
        const icon = icons[category] || icons['景点'];
        
        const marker = L.marker(coords, { icon });
        
        // 弹窗内容
        const popupContent = `
            <div class="popup-content">
                <div class="popup-title">${name}</div>
                <span class="popup-category ${category}">${category}</span>
                <div class="popup-info">${intro}</div>
                <div class="popup-info">📍 ${address}</div>
                <div class="popup-info">🕐 ${opening_hours}</div>
                <div class="popup-info">💰 ${ticket}</div>
                <div class="popup-rating">⭐ ${'★'.repeat(Math.floor(rating))}${rating % 1 >= 0.5 ? '½' : ''} (${rating})</div>
            </div>
        `;
        
        marker.bindPopup(popupContent, { maxWidth: 300, className: 'custom-popup' });
        marker.placeData = feature.properties;
        markerLayer.addLayer(marker);
        allMarkers.push(marker);
    });
}

// ========== 更新统计 ==========
function updateStats(features) {
    const parks = features.filter(f => f.properties.category === '公园').length;
    const spots = features.filter(f => f.properties.category === '景点').length;
    const parks_fun = features.filter(f => f.properties.category === '游乐园').length;
    
    document.getElementById('stat-parks').textContent = parks;
    document.getElementById('stat-spots').textContent = spots;
    document.getElementById('stat-fun').textContent = parks_fun;
}

// ========== 地点列表 ==========
function renderPlaceList(features) {
    const container = document.getElementById('place-list');
    container.innerHTML = '';
    
    features.forEach(feature => {
        const { name, category, address } = feature.properties;
        const item = document.createElement('div');
        item.className = 'place-item';
        item.innerHTML = `
            <div class="place-name">${name}</div>
            <div class="place-category">${category}</div>
            <div class="place-address">📍 ${address}</div>
        `;
        item.addEventListener('click', () => {
            const coords = [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
            map.setView(coords, 16, { animate: true });
            // 找到对应的marker并打开弹窗
            allMarkers.forEach(m => {
                const lat = m.getLatLng().lat;
                const lng = m.getLatLng().lng;
                if (Math.abs(lat - coords[0]) < 0.001 && Math.abs(lng - coords[1]) < 0.001) {
                    m.openPopup();
                }
            });
        });
        container.appendChild(item);
    });
}

// ========== 筛选功能 ==========
function filterByCategory(category) {
    currentFilter = category;
    
    // 更新按钮状态
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });
    
    let filtered = allFeatures;
    if (category !== '全部') {
        filtered = allFeatures.filter(f => f.properties.category === category);
    }
    
    renderMarkers(filtered);
    renderPlaceList(filtered);
}

// ========== 搜索功能 ==========
function searchPlaces(query) {
    const results = document.getElementById('search-results');
    if (!query || query.length < 1) {
        results.classList.remove('active');
        return;
    }
    
    const matches = allFeatures.filter(f => 
        f.properties.name.includes(query) || 
        f.properties.address.includes(query) ||
        f.properties.category.includes(query)
    );
    
    results.innerHTML = '';
    if (matches.length > 0) {
        results.classList.add('active');
        matches.slice(0, 10).forEach(f => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `${f.properties.name} <span style="color:var(--primary);font-size:12px;">${f.properties.category}</span>`;
            item.addEventListener('click', () => {
                const coords = [f.geometry.coordinates[1], f.geometry.coordinates[0]];
                map.setView(coords, 16, { animate: true });
                results.classList.remove('active');
                document.getElementById('search-input').value = f.properties.name;
            });
            results.appendChild(item);
        });
    } else {
        results.classList.remove('active');
    }
}

// ========== 定位功能 ==========
function locateMe() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                map.setView([latitude, longitude], 15);
                L.circleMarker([latitude, longitude], {
                    radius: 8,
                    color: '#2ecc71',
                    fillColor: '#2ecc71',
                    fillOpacity: 0.8
                }).addTo(map).bindPopup('📍 你现在的位置').openPopup();
            },
            () => {
                alert('定位失败，请检查定位权限设置');
            }
        );
    } else {
        alert('您的浏览器不支持定位功能');
    }
}

// ========== 暗黑模式切换 ==========
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    document.getElementById('theme-btn').innerHTML = newTheme === 'dark' ? '☀️ 白天模式' : '🌙 夜间模式';
    localStorage.setItem('theme', newTheme);
}

// ========== 测距工具 ==========
let measuring = false;
let measureLayer = L.layerGroup().addTo(map);
let measurePoints = [];

function toggleMeasure() {
    measuring = !measuring;
    const btn = document.getElementById('measure-btn');
    
    if (measuring) {
        btn.style.background = 'rgba(231,76,60,0.3)';
        btn.innerHTML = '📏 结束测量';
        map.on('click', addMeasurePoint);
    } else {
        btn.style.background = '';
        btn.innerHTML = '📏 测距';
        map.off('click', addMeasurePoint);
        measureLayer.clearLayers();
        measurePoints = [];
    }
}

function addMeasurePoint(e) {
    measurePoints.push(e.latlng);
    
    // 画点
    L.circleMarker(e.latlng, {
        radius: 5,
        color: '#e74c3c',
        fillColor: '#e74c3c',
        fillOpacity: 1
    }).addTo(measureLayer);
    
    // 画线
    if (measurePoints.length > 1) {
        const points = measurePoints.slice(-2);
        L.polyline(points, { color: '#e74c3c', weight: 2, dashArray: '5, 10' }).addTo(measureLayer);
        
        // 显示距离
        const totalDistance = measurePoints.reduce((total, point, i) => {
            if (i === 0) return total;
            return total + map.distance(measurePoints[i-1], point);
        }, 0);
        
        const midPoint = L.polyline(points).getBounds().getCenter();
        const distanceText = totalDistance >= 1000 
            ? `${(totalDistance/1000).toFixed(2)} km`
            : `${totalDistance.toFixed(0)} m`;
        
        // 移除旧的距离标签
        measureLayer.eachLayer(layer => {
            if (layer instanceof L.Tooltip) {
                measureLayer.removeLayer(layer);
            }
        });
        
        L.tooltip({
            permanent: true,
            direction: 'top',
            className: 'distance-tooltip'
        })
        .setLatLng(midPoint)
        .setContent(`总距离: ${distanceText}`)
        .addTo(measureLayer);
    }
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    // 加载主题
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('theme-btn').innerHTML = savedTheme === 'dark' ? '☀️ 白天模式' : '🌙 夜间模式';
    
    // 加载数据
    loadData();
    
    // 搜索事件
    document.getElementById('search-input').addEventListener('input', (e) => {
        searchPlaces(e.target.value);
    });
    
    // 点击其他地方关闭搜索结果
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            document.getElementById('search-results').classList.remove('active');
        }
    });
});
