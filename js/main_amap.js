// ============================================
// 芜湖市区文旅导览地图 - 高德JS API版
// ============================================

// ========== 全局变量 ==========
let map = null;
let allMarkers = [];
let allFeatures = [];
let currentFilter = '全部';
let isMeasuring = false;
let mouseTool = null;
let sidebarVisible = true;

// ========== 景点数据（高德坐标 = 经纬度） ==========
const placeData = [
    { id: 1, name: "镜湖公园", category: "公园", lng: 118.3765, lat: 31.3328, address: "芜湖市镜湖区镜湖路", intro: "芜湖最著名的城市公园，位于市中心，湖光山色，景色宜人，是市民休闲娱乐的好去处。", rating: 4.5, hours: "全天开放", ticket: "免费" },
    { id: 2, name: "赭山公园", category: "公园", lng: 118.3821, lat: 31.3412, address: "芜湖市镜湖区赭山路", intro: "赭山公园是芜湖市区内最大的综合性公园，园内有赭山塔、动物园等景点，登顶可俯瞰芜湖全景。", rating: 4.6, hours: "06:00-22:00", ticket: "免费" },
    { id: 3, name: "神山公园", category: "公园", lng: 118.4112, lat: 31.3589, address: "芜湖市鸠江区神山路", intro: "神山公园是芜湖的天然氧吧，山林茂密，空气清新，有多条登山步道，适合徒步和健身。", rating: 4.3, hours: "06:00-21:00", ticket: "免费" },
    { id: 4, name: "滨江公园", category: "公园", lng: 118.3612, lat: 31.3415, address: "芜湖市镜湖区滨江路", intro: "沿长江而建的滨江景观带，可欣赏长江壮阔景色，是散步、观江、拍照的绝佳地点。", rating: 4.7, hours: "全天开放", ticket: "免费" },
    { id: 5, name: "汀棠公园", category: "公园", lng: 118.3956, lat: 31.3521, address: "芜湖市镜湖区汀棠路", intro: "汀棠公园以水景为特色，园内湖面宽阔，绿树成荫，是市民休闲散步的好去处。", rating: 4.2, hours: "06:00-21:00", ticket: "免费" },
    { id: 6, name: "弋矶山公园", category: "公园", lng: 118.3668, lat: 31.3502, address: "芜湖市镜湖区弋矶山路", intro: "弋矶山公园位于长江之滨，历史悠久，园内有古建筑和江景观景台，风景优美。", rating: 4.1, hours: "全天开放", ticket: "免费" },
    { id: 7, name: "芜湖古城", category: "景点", lng: 118.3725, lat: 31.3258, address: "芜湖市镜湖区环城北路", intro: "芜湖古城是芜湖历史文化的缩影，明清建筑风格，集文化展示、旅游观光、商业休闲于一体。", rating: 4.4, hours: "09:00-21:00", ticket: "免费" },
    { id: 8, name: "鸠兹古镇", category: "景点", lng: 118.4389, lat: 31.3658, address: "芜湖市鸠江区鸠兹古镇", intro: "鸠兹古镇以徽派建筑为特色，集民俗文化、美食购物、休闲娱乐于一体，是芜湖热门旅游目的地。", rating: 4.3, hours: "09:00-22:00", ticket: "免费" },
    { id: 9, name: "鸠兹广场", category: "景点", lng: 118.3742, lat: 31.3345, address: "芜湖市镜湖区鸠兹广场", intro: "芜湖城市中心广场，地标性建筑，广场中央有大型雕塑，周边商业繁华。", rating: 4.2, hours: "全天开放", ticket: "免费" },
    { id: 10, name: "天门山", category: "景点", lng: 118.3512, lat: 31.4215, address: "芜湖市鸠江区天门山", intro: "天门山是芜湖著名风景区，山势陡峭，风景秀丽，有\"天门中断楚江开\"的壮丽景观。", rating: 4.5, hours: "08:00-17:00", ticket: "免费" },
    { id: 11, name: "芜湖长江大桥", category: "景点", lng: 118.3558, lat: 31.3685, address: "芜湖市镜湖区", intro: "芜湖长江大桥是公铁两用桥，连接芜湖市区与江北，是芜湖的重要交通枢纽和地标建筑。", rating: 4.6, hours: "全天开放", ticket: "免费" },
    { id: 12, name: "方特欢乐世界", category: "游乐园", lng: 118.4256, lat: 31.3721, address: "芜湖市鸠江区银湖北路", intro: "华强方特旗下的大型主题乐园，拥有众多刺激好玩的游乐设施和精彩演艺，适合全家游玩。", rating: 4.7, hours: "09:30-18:00（周末延长）", ticket: "成人票260元起" },
    { id: 13, name: "方特梦幻王国", category: "游乐园", lng: 118.4312, lat: 31.3785, address: "芜湖市鸠江区赤铸山东路", intro: "方特梦幻王国以中国传统文化为主题，结合现代科技，打造梦幻般的游乐体验。", rating: 4.6, hours: "09:30-18:00", ticket: "成人票260元起" },
    { id: 14, name: "芜湖大白鲸海洋公园", category: "游乐园", lng: 118.4412, lat: 31.3698, address: "芜湖市鸠江区徽州路", intro: "大型海洋主题公园，有白鲸、海豚等海洋动物表演，是亲子游的热门选择。", rating: 4.4, hours: "09:00-17:30", ticket: "成人票200元" },
    { id: 15, name: "方特水上乐园", category: "游乐园", lng: 118.4289, lat: 31.3752, address: "芜湖市鸠江区方特旅游区", intro: "大型水上主题乐园，拥有多种水上游乐设施，夏季消暑的好去处。", rating: 4.3, hours: "10:00-18:00（夏季开放）", ticket: "成人票200元" },
    { id: 16, name: "中央公园", category: "公园", lng: 118.4189, lat: 31.3485, address: "芜湖市鸠江区政务文化中心", intro: "芜湖中央公园是城东新区的大型城市公园，环境优美，适合散步休闲。", rating: 4.0, hours: "全天开放", ticket: "免费" },
    { id: 17, name: "中江公园", category: "公园", lng: 118.4258, lat: 31.3552, address: "芜湖市鸠江区中江大道", intro: "中江公园是城东新区的重要公园，沿水系而建，景色优美。", rating: 4.1, hours: "全天开放", ticket: "免费" },
    { id: 18, name: "广济寺", category: "景点", lng: 118.3815, lat: 31.3405, address: "芜湖市镜湖区赭山公园内", intro: "广济寺是芜湖著名的佛教寺庙，历史悠久，香火旺盛，位于赭山公园内。", rating: 4.3, hours: "07:00-17:00", ticket: "免费" },
    { id: 19, name: "芜湖博物馆", category: "景点", lng: 118.4125, lat: 31.3452, address: "芜湖市鸠江区政务文化中心", intro: "芜湖博物馆展示了芜湖悠久的历史文化，馆藏丰富，是了解芜湖的好去处。", rating: 4.4, hours: "09:00-17:00（周一闭馆）", ticket: "免费" },
    { id: 20, name: "滨江风光带", category: "景点", lng: 118.3625, lat: 31.3385, address: "芜湖市镜湖区长江沿岸", intro: "芜湖滨江风光带是沿长江打造的景观长廊，可欣赏长江美景，是市民休闲健身的好去处。", rating: 4.5, hours: "全天开放", ticket: "免费" }
];

// ========== 颜色配置 ==========
const categoryColors = {
    '公园': '#2ecc71',
    '景点': '#f39c12',
    '游乐园': '#e74c3c'
};

const categoryIcons = {
    '公园': '🌳',
    '景点': '🏛️',
    '游乐园': '🎢'
};

// ========== 初始化地图 ==========
function initMap() {
    map = new AMap.Map('map', {
        center: [118.385, 31.352],  // 芜湖市中心 [经度, 纬度]
        zoom: 13,
        zooms: [10, 18],
        mapStyle: 'amap://styles/light',  // 亮色风格
        features: ['bg', 'road', 'building', 'point']
    });
    
    // 添加工具栏（缩放、定位按钮等）
    map.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
        map.addControl(new AMap.ToolBar({
            position: 'LB',  // 左下角
            ruler: true
        }));
        map.addControl(new AMap.Scale());
    });
    
    // 加载景点数据
    allFeatures = placeData;
    renderMarkers(allFeatures);
    updateStats(allFeatures);
    renderPlaceList(allFeatures);
}

// ========== 创建自定义标记 ==========
function createMarkerHtml(category) {
    const color = categoryColors[category] || '#999';
    const icon = categoryIcons[category] || '📍';
    return `<div style="background:${color};width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 8px rgba(0,0,0,0.3);border:2px solid white;cursor:pointer;">${icon}</div>`;
}

// ========== 渲染标记 ==========
function renderMarkers(features) {
    // 清除旧标记
    if (allMarkers.length > 0) {
        map.remove(allMarkers);
        allMarkers = [];
    }
    
    features.forEach(item => {
        const marker = new AMap.Marker({
            position: [item.lng, item.lat],
            content: createMarkerHtml(item.category),
            offset: new AMap.Pixel(-16, -16),
            extData: item
        });
        
        // 点击弹窗
        const infoContent = `
            <div style="min-width:240px;padding:5px;">
                <div style="font-size:16px;font-weight:600;color:#27ae60;margin-bottom:6px;">${item.name}</div>
                <div style="display:inline-block;padding:2px 10px;border-radius:10px;font-size:12px;font-weight:500;margin-bottom:6px;background:${categoryColors[item.category]}22;color:${categoryColors[item.category]};border:1px solid ${categoryColors[item.category]}44;">
                    ${categoryIcons[item.category]} ${item.category}
                </div>
                <div style="font-size:13px;color:#666;line-height:1.6;margin-bottom:4px;">${item.intro}</div>
                <div style="font-size:12px;color:#888;margin-bottom:2px;">📍 ${item.address}</div>
                <div style="font-size:12px;color:#888;margin-bottom:2px;">🕐 ${item.hours}</div>
                <div style="font-size:12px;color:#888;margin-bottom:4px;">💰 ${item.ticket}</div>
                <div style="color:#f39c12;font-size:13px;">⭐ ${'★'.repeat(Math.floor(item.rating))}${item.rating % 1 >= 0.5 ? '½' : ''} (${item.rating})</div>
            </div>
        `;
        
        marker.on('click', function(e) {
            const info = new AMap.InfoWindow({
                content: infoContent,
                offset: new AMap.Pixel(0, -30),
                closeWhenClickMap: true
            });
            info.open(map, e.target.getPosition());
        });
        
        marker.setMap(map);
        allMarkers.push(marker);
    });
}

// ========== 更新统计 ==========
function updateStats(features) {
    const parks = features.filter(f => f.category === '公园').length;
    const spots = features.filter(f => f.category === '景点').length;
    const funs = features.filter(f => f.category === '游乐园').length;
    
    document.getElementById('statParks').textContent = parks;
    document.getElementById('statSpots').textContent = spots;
    document.getElementById('statFun').textContent = funs;
}

// ========== 地点列表 ==========
function renderPlaceList(features) {
    const container = document.getElementById('placeList');
    container.innerHTML = '';
    
    features.forEach(item => {
        const div = document.createElement('div');
        div.className = 'place-item';
        div.innerHTML = `
            <div class="place-name">${item.name}</div>
            <div class="place-category" style="color:${categoryColors[item.category]}">${categoryIcons[item.category]} ${item.category}</div>
            <div class="place-address">📍 ${item.address}</div>
        `;
        div.addEventListener('click', () => {
            map.setZoomAndCenter(16, [item.lng, item.lat]);
            // 找到对应标记并触发点击
            allMarkers.forEach(m => {
                const data = m.getExtData();
                if (data && data.id === item.id) {
                    // 模拟点击打开信息窗
                    const info = new AMap.InfoWindow({
                        content: createInfoContent(item),
                        offset: new AMap.Pixel(0, -30),
                        closeWhenClickMap: true
                    });
                    info.open(map, m.getPosition());
                }
            });
        });
        container.appendChild(div);
    });
}

// ========== 创建信息窗内容 ==========
function createInfoContent(item) {
    return `
        <div style="min-width:240px;padding:5px;">
            <div style="font-size:16px;font-weight:600;color:#27ae60;margin-bottom:6px;">${item.name}</div>
            <div style="display:inline-block;padding:2px 10px;border-radius:10px;font-size:12px;font-weight:500;margin-bottom:6px;background:${categoryColors[item.category]}22;color:${categoryColors[item.category]};border:1px solid ${categoryColors[item.category]}44;">
                ${categoryIcons[item.category]} ${item.category}
            </div>
            <div style="font-size:13px;color:#666;line-height:1.6;margin-bottom:4px;">${item.intro}</div>
            <div style="font-size:12px;color:#888;margin-bottom:2px;">📍 ${item.address}</div>
            <div style="font-size:12px;color:#888;margin-bottom:2px;">🕐 ${item.hours}</div>
            <div style="font-size:12px;color:#888;margin-bottom:4px;">💰 ${item.ticket}</div>
            <div style="color:#f39c12;font-size:13px;">⭐ ${'★'.repeat(Math.floor(item.rating))}${item.rating % 1 >= 0.5 ? '½' : ''} (${item.rating})</div>
        </div>
    `;
}

// ========== 筛选功能 ==========
function filterByCategory(category) {
    currentFilter = category;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });
    
    let filtered = allFeatures;
    if (category !== '全部') {
        filtered = allFeatures.filter(f => f.category === category);
    }
    
    renderMarkers(filtered);
    renderPlaceList(filtered);
}

// ========== 搜索功能 ==========
function searchPlaces(query) {
    const results = document.getElementById('searchResults');
    if (!query || query.length < 1) {
        results.classList.remove('active');
        return;
    }
    
    const matches = allFeatures.filter(f => 
        f.name.includes(query) || 
        f.address.includes(query) ||
        f.category.includes(query)
    );
    
    results.innerHTML = '';
    if (matches.length > 0) {
        results.classList.add('active');
        matches.slice(0, 10).forEach(item => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML = `${item.name} <span style="color:${categoryColors[item.category]};font-size:12px;">${categoryIcons[item.category]} ${item.category}</span>`;
            div.addEventListener('click', () => {
                map.setZoomAndCenter(16, [item.lng, item.lat]);
                results.classList.remove('active');
                document.getElementById('searchInput').value = item.name;
            });
            results.appendChild(div);
        });
    } else {
        results.classList.remove('active');
    }
}

// ========== 定位功能（高德定位） ==========
function locateMe() {
    map.plugin(['AMap.Geolocation'], function() {
        const geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,
            timeout: 10000,
            zoomToAccuracy: true
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition(function(status, result) {
            if (status === 'complete') {
                const pos = result.position;
                map.setZoomAndCenter(15, [pos.lng, pos.lat]);
                
                // 添加当前位置标记
                const myMarker = new AMap.Marker({
                    position: [pos.lng, pos.lat],
                    content: '<div style="background:#3498db;width:20px;height:20px;border-radius:50%;border:3px solid white;box-shadow:0 0 10px rgba(52,152,219,0.5);"></div>',
                    offset: new AMap.Pixel(-10, -10)
                });
                myMarker.setMap(map);
                
                new AMap.InfoWindow({
                    content: '<div style="padding:5px;font-weight:500;">📍 你的位置</div>',
                    offset: new AMap.Pixel(0, -20)
                }).open(map, [pos.lng, pos.lat]);
                
            } else {
                alert('定位失败，请检查定位权限');
            }
        });
    });
}

// ========== 测距工具 ==========
function toggleMeasure() {
    isMeasuring = !isMeasuring;
    const btn = document.getElementById('measureBtn');
    
    if (isMeasuring) {
        btn.style.background = 'rgba(231,76,60,0.3)';
        btn.innerHTML = '📏 结束测量';
        
        map.plugin(['AMap.MouseTool'], function() {
            mouseTool = new AMap.MouseTool(map);
            mouseTool.rule({
                startMarker: true,
                endMarker: true,
                lineColor: '#e74c3c',
                lineStroke: 2
            });
        });
    } else {
        btn.style.background = '';
        btn.innerHTML = '📏 测距';
        if (mouseTool) {
            mouseTool.close();
        }
    }
}

// ========== 侧边栏切换 ==========
function toggleSidebar() {
    sidebarVisible = !sidebarVisible;
    document.getElementById('sidebar').style.display = sidebarVisible ? 'flex' : 'none';
}

// ========== 暗黑模式切换 ==========
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const btn = document.getElementById('themeBtn');
    btn.innerHTML = newTheme === 'dark' ? '☀️ 白天' : '🌙 夜间';
    
    // 切换高德地图主题
    if (newTheme === 'dark') {
        map.setMapStyle('amap://styles/dark');
    } else {
        map.setMapStyle('amap://styles/light');
    }
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    // 恢复主题
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('themeBtn').innerHTML = savedTheme === 'dark' ? '☀️ 白天' : '🌙 夜间';
    
    // 初始化地图
    initMap();
    
    // 搜索事件
    document.getElementById('searchInput').addEventListener('input', function(e) {
        searchPlaces(e.target.value);
    });
    
    // 点击其他地方关闭搜索结果
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-box')) {
            document.getElementById('searchResults').classList.remove('active');
        }
    });
});
