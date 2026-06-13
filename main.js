// ============================================
// 芜湖文旅WebGIS - 高德JS API版
// ============================================

var placeData = [
    { id: 1,  name: "镜湖公园",       category: "公园", lng: 118.3765, lat: 31.3328, address: "芜湖市镜湖区镜湖路", intro: "芜湖最著名的城市公园，位于市中心，湖光山色，景色宜人，是市民休闲娱乐的好去处。", rating: 4.5, hours: "全天开放", ticket: "免费" },
    { id: 2,  name: "赭山公园",       category: "公园", lng: 118.3821, lat: 31.3412, address: "芜湖市镜湖区赭山路", intro: "赭山公园是芜湖市区内最大的综合性公园，园内有赭山塔、动物园等景点，登顶可俯瞰芜湖全景。", rating: 4.6, hours: "06:00-22:00", ticket: "免费" },
    { id: 3,  name: "神山公园",       category: "公园", lng: 118.4112, lat: 31.3589, address: "芜湖市鸠江区神山路", intro: "神山公园是芜湖的天然氧吧，山林茂密，空气清新，有多条登山步道，适合徒步和健身。", rating: 4.3, hours: "06:00-21:00", ticket: "免费" },
    { id: 4,  name: "滨江公园",       category: "公园", lng: 118.3612, lat: 31.3415, address: "芜湖市镜湖区滨江路", intro: "沿长江而建的滨江景观带，可欣赏长江壮阔景色，是散步、观江、拍照的绝佳地点。", rating: 4.7, hours: "全天开放", ticket: "免费" },
    { id: 5,  name: "汀棠公园",       category: "公园", lng: 118.3956, lat: 31.3521, address: "芜湖市镜湖区汀棠路", intro: "汀棠公园以水景为特色，园内湖面宽阔，绿树成荫，是市民休闲散步的好去处。", rating: 4.2, hours: "06:00-21:00", ticket: "免费" },
    { id: 7,  name: "芜湖古城",       category: "景点", lng: 118.3725, lat: 31.3258, address: "芜湖市镜湖区环城北路", intro: "芜湖古城是芜湖历史文化的缩影，明清建筑风格，集文化展示、旅游观光、商业休闲于一体。", rating: 4.4, hours: "09:00-21:00", ticket: "免费" },
    { id: 8,  name: "鸠兹古镇",       category: "景点", lng: 118.4389, lat: 31.3658, address: "芜湖市鸠江区鸠兹古镇", intro: "鸠兹古镇以徽派建筑为特色，集民俗文化、美食购物、休闲娱乐于一体，是芜湖热门旅游目的地。", rating: 4.3, hours: "09:00-22:00", ticket: "免费" },
    { id: 9,  name: "鸠兹广场",       category: "景点", lng: 118.3742, lat: 31.3345, address: "芜湖市镜湖区鸠兹广场", intro: "芜湖城市中心广场，地标性建筑，广场中央有大型雕塑，周边商业繁华。", rating: 4.2, hours: "全天开放", ticket: "免费" },
    { id: 10, name: "天门山",         category: "景点", lng: 118.3512, lat: 31.4215, address: "芜湖市鸠江区天门山", intro: "天门山是芜湖著名风景区，山势陡峭，风景秀丽，有\"天门中断楚江开\"的壮丽景观。", rating: 4.5, hours: "08:00-17:00", ticket: "免费" },
    { id: 11, name: "芜湖长江大桥",   category: "景点", lng: 118.3558, lat: 31.3685, address: "芜湖市镜湖区", intro: "芜湖长江大桥是公铁两用桥，连接芜湖市区与江北，是芜湖的重要交通枢纽和地标建筑。", rating: 4.6, hours: "全天开放", ticket: "免费" },
    { id: 12, name: "方特欢乐世界",   category: "游乐园", lng: 118.4256, lat: 31.3721, address: "芜湖市鸠江区银湖北路", intro: "华强方特旗下的大型主题乐园，拥有众多刺激好玩的游乐设施和精彩演艺，适合全家游玩。", rating: 4.7, hours: "09:30-18:00（周末延长）", ticket: "成人票260元起" },
    { id: 13, name: "方特梦幻王国",   category: "游乐园", lng: 118.4312, lat: 31.3785, address: "芜湖市鸠江区赤铸山东路", intro: "方特梦幻王国以中国传统文化为主题，结合现代科技，打造梦幻般的游乐体验。", rating: 4.6, hours: "09:30-18:00", ticket: "成人票260元起" },
    { id: 14, name: "芜湖大白鲸海洋公园", category: "游乐园", lng: 118.4412, lat: 31.3698, address: "芜湖市鸠江区徽州路", intro: "大型海洋主题公园，有白鲸、海豚等海洋动物表演，是亲子游的热门选择。", rating: 4.4, hours: "09:00-17:30", ticket: "成人票200元" },
    { id: 15, name: "方特水上乐园",   category: "游乐园", lng: 118.4289, lat: 31.3752, address: "芜湖市鸠江区方特旅游区", intro: "大型水上主题乐园，拥有多种水上游乐设施，夏季消暑的好去处。", rating: 4.3, hours: "10:00-18:00（夏季开放）", ticket: "成人票200元" },
    { id: 16, name: "中央公园",       category: "公园", lng: 118.4189, lat: 31.3485, address: "芜湖市鸠江区政务文化中心", intro: "芜湖中央公园是城东新区的大型城市公园，环境优美，适合散步休闲。", rating: 4.0, hours: "全天开放", ticket: "免费" },
    { id: 17, name: "中江公园",       category: "公园", lng: 118.4258, lat: 31.3552, address: "芜湖市鸠江区中江大道", intro: "中江公园是城东新区的重要公园，沿水系而建，景色优美。", rating: 4.1, hours: "全天开放", ticket: "免费" },
    { id: 18, name: "广济寺",         category: "景点", lng: 118.3815, lat: 31.3405, address: "芜湖市镜湖区赭山公园内", intro: "广济寺是芜湖著名的佛教寺庙，历史悠久，香火旺盛，位于赭山公园内。", rating: 4.3, hours: "07:00-17:00", ticket: "免费" },
    { id: 19, name: "芜湖博物馆",     category: "景点", lng: 118.4125, lat: 31.3452, address: "芜湖市鸠江区政务文化中心", intro: "芜湖博物馆展示了芜湖悠久的历史文化，馆藏丰富，是了解芜湖的好去处。", rating: 4.4, hours: "09:00-17:00（周一闭馆）", ticket: "免费" },
];

var categoryColors = { '公园': '#2ecc71', '景点': '#f39c12', '游乐园': '#e74c3c' };
var categoryIcons = { '公园': '🌳', '景点': '🏛️', '游乐园': '🎢' };

var map = null;
var allMarkers = [];
var allFeatures = placeData.slice();
var currentFilter = '全部';
var isMeasuring = false;
var mouseTool = null;
var sidebarVisible = true;

// 轨道交通标记
var transitMarkers = [];

// ========== 初始化 ==========
function initMap() {
    map = new AMap.Map('map', {
        center: [118.385, 31.352],
        zoom: 13,
        zooms: [10, 18],
        features: ['bg', 'road', 'building', 'point']
    });

    map.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
        map.addControl(new AMap.ToolBar({ position: 'LB', ruler: true }));
        map.addControl(new AMap.Scale());
    });

    // 应用已保存的底图样式
    applyBasemap();

    document.getElementById('placeList').innerHTML =
        '<p style="color:var(--text-light);text-align:center;padding:20px;">🔄 正在搜索精确位置...</p>';

    map.plugin(['AMap.PlaceSearch', 'AMap.Geocoder'], function() {
        startCorrection();
        loadTransitData();
    });
}

// ========== 坐标校正（串行，防限流） ==========
function startCorrection() {
    var items = allFeatures;
    var total = items.length;
    var index = 0;
    var success = 0;
    var ps = new AMap.PlaceSearch({ city: '芜湖', pageSize: 1 });
    var geo = new AMap.Geocoder({ city: '芜湖市' });

    function updateProgress() {
        document.getElementById('placeList').innerHTML =
            '<p style="color:var(--text-light);text-align:center;padding:20px;">🔄 正在校正坐标 ' + index + '/' + total + '</p>';
    }

    function finish() {
        console.log('=== 坐标校正完成! 成功: ' + success + '/' + total + ' ===');
        renderMarkers(allFeatures);
        updateStats(allFeatures);
        renderPlaceList(allFeatures);
    }

    // 已使用的坐标集合，用于检测重复
    var usedCoords = {};

    // 芜湖市范围校验
    function isInWuhu(lng, lat) {
        return lng > 118.2 && lng < 118.7 && lat > 31.0 && lat < 31.8;
    }

    function coordKey(lng, lat) {
        return lng.toFixed(4) + ',' + lat.toFixed(4);
    }

    function isValidResult(item, lng, lat) {
        // 必须在芜湖范围内
        if (!isInWuhu(lng, lat)) {
            console.warn('  ⚠ 坐标超出芜湖范围: [' + lng.toFixed(4) + ', ' + lat.toFixed(4) + ']');
            return false;
        }
        // 不能和其他景点坐标重复
        var key = coordKey(lng, lat);
        if (usedCoords[key]) {
            console.warn('  ⚠ 坐标与"' + usedCoords[key] + '"重复: [' + lng.toFixed(4) + ', ' + lat.toFixed(4) + ']');
            return false;
        }
        return true;
    }

    function next() {
        if (index >= total) { finish(); return; }

        var item = items[index];
        updateProgress();

        // 主力：PlaceSearch POI搜索（高德POI数据库最准确）
        ps.search(item.name, function(psStatus, psResult) {
            if (psStatus === 'complete' && psResult.info === 'OK') {
                var pois = psResult.poiList.pois;
                if (pois && pois.length > 0) {
                    var pLoc = pois[0].location;
                    var pLng = (typeof pLoc.lng === 'number') ? pLoc.lng : (pLoc.getLng ? pLoc.getLng() : pLoc.lng);
                    var pLat = (typeof pLoc.lat === 'number') ? pLoc.lat : (pLoc.getLat ? pLoc.getLat() : pLoc.lat);

                    if (isValidResult(item, pLng, pLat)) {
                        item.lng = pLng;
                        item.lat = pLat;
                        usedCoords[coordKey(pLng, pLat)] = item.name;
                        success++;
                        console.log('✅ [POI] ' + item.name + ' → [' + pLng.toFixed(6) + ', ' + pLat.toFixed(6) + ']');
                        index++;
                        setTimeout(next, 350);
                        return;
                    }
                }
            }

            // POI无效 → Geocoder地址反查兜底
            console.log('  POI无效 ' + item.name + '，尝试Geocoder...');
            var geoQuery = '芜湖市' + item.address + item.name;
            geo.getLocation(geoQuery, function(gStatus, gResult) {
                if (gStatus === 'complete' && gResult.info === 'OK' && gResult.geocodes.length > 0) {
                    var loc = gResult.geocodes[0].location;
                    var lng = (typeof loc.lng === 'number') ? loc.lng : (loc.getLng ? loc.getLng() : loc.lng);
                    var lat = (typeof loc.lat === 'number') ? loc.lat : (loc.getLat ? loc.getLat() : loc.lat);

                    if (isValidResult(item, lng, lat)) {
                        item.lng = lng;
                        item.lat = lat;
                        usedCoords[coordKey(lng, lat)] = item.name;
                        success++;
                        console.log('🔧 [GEO] ' + item.name + ' → [' + lng.toFixed(6) + ', ' + lat.toFixed(6) + ']');
                        index++;
                        setTimeout(next, 350);
                        return;
                    }
                }

                console.warn('❌ 都失败: ' + item.name + '，保留原始坐标 [' + item.lng + ', ' + item.lat + ']');
                index++;
                setTimeout(next, 350);
            });
        });
    }

    next();
}

// ========== 渲染标记 ==========
function renderMarkers(features) {
    if (allMarkers.length > 0) {
        map.remove(allMarkers);
        allMarkers = [];
    }

    features.forEach(function(item) {
        var color = categoryColors[item.category] || '#999';
        var emoji = categoryIcons[item.category] || '📍';

        // 主标记：SVG 大头针图标（锚点在尖端，定位准确）
        var svgPin = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48">' +
            '<defs>' +
                '<filter id="shadow-' + item.id + '"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity="0.3"/></filter>' +
            '</defs>' +
            '<path d="M20 0C11.6 0 5 6.6 5 15c0 9 15 28 15 28s15-19 15-28C35 6.6 28.4 0 20 0z" fill="' + color + '" stroke="white" stroke-width="2.5" filter="url(#shadow-' + item.id + ')"/>' +
            '<circle cx="20" cy="14" r="7" fill="white" opacity="0.95"/>' +
            '<text x="20" y="18" text-anchor="middle" font-size="11" fill="#333">' + emoji + '</text>' +
            '</svg>';

        var marker = new AMap.Marker({
            position: [item.lng, item.lat],
            icon: new AMap.Icon({
                size: new AMap.Size(40, 48),
                image: 'data:image/svg+xml,' + encodeURIComponent(svgPin),
                imageSize: new AMap.Size(40, 48),
                imageOffset: new AMap.Pixel(0, 0)
            }),
            offset: new AMap.Pixel(-20, -48), // 锚点在针尖
            zIndex: 101,
            extData: item
        });

        // 文本标签（独立 marker）
        var labelHtml = '<div style="' +
            'position:relative;left:-60px;top:-52px;width:120px;text-align:center;' +
            'font-size:12px;font-weight:700;color:#333;white-space:nowrap;' +
            'text-shadow:0 0 3px white,0 0 3px white,0 0 3px white,0 0 3px white;' +
            'pointer-events:none;">' + item.name + '</div>';

        var labelMarker = new AMap.Marker({
            position: [item.lng, item.lat],
            content: labelHtml,
            offset: new AMap.Pixel(0, 0),
            zIndex: 100,
            extData: item
        });

        // 点击事件
        marker.on('click', function(e) {
            new AMap.InfoWindow({
                content: createInfoContent(item),
                offset: new AMap.Pixel(0, -48),
                closeWhenClickMap: true
            }).open(map, e.target.getPosition());
        });

        marker.setMap(map);
        labelMarker.setMap(map);
        allMarkers.push(marker);
        allMarkers.push(labelMarker);
    });
}

function createInfoContent(item) {
    var s = '';
    s += '<div style="min-width:260px;padding:5px;">';
    s += '<div style="font-size:17px;font-weight:600;color:#27ae60;margin-bottom:6px;">' + item.name + '</div>';
    s += '<div style="display:inline-block;padding:2px 12px;border-radius:10px;font-size:12px;font-weight:500;margin-bottom:8px;background:' + categoryColors[item.category] + '22;color:' + categoryColors[item.category] + ';border:1px solid ' + categoryColors[item.category] + '44;">' + categoryIcons[item.category] + ' ' + item.category + '</div>';
    s += '<div style="font-size:13px;color:#555;line-height:1.7;margin-bottom:6px;">' + item.intro + '</div>';
    s += '<div style="font-size:12px;color:#888;margin-bottom:2px;">📍 ' + item.address + '</div>';
    s += '<div style="font-size:12px;color:#888;margin-bottom:2px;">🕐 ' + item.hours + '</div>';
    s += '<div style="font-size:12px;color:#888;margin-bottom:2px;">💰 ' + item.ticket + '</div>';
    s += '<div style="color:#f39c12;font-size:14px;margin-bottom:8px;">⭐ ' + '★'.repeat(Math.floor(item.rating)) + (item.rating % 1 >= 0.5 ? '½' : '') + ' (' + item.rating + ')</div>';
    s += '<button onclick="openDetailById(' + item.id + ')" style="width:100%;padding:8px 0;background:#27ae60;color:white;border:none;border-radius:8px;font-size:14px;cursor:pointer;font-weight:500;">📋 查看详情</button>';
    s += '</div>';
    return s;
}

// ========== 详情面板逻辑 ==========
var detailSearch = null;

function openDetailById(id) {
    var item = allFeatures.find(function(f) { return f.id === id; });
    if (item) openDetail(item);
}

function openDetail(item) {
    var panel = document.getElementById('detailPanel');
    var overlay = document.getElementById('detailOverlay');
    var body = document.getElementById('detailBody');
    var title = panel.querySelector('.detail-panel-title');

    title.textContent = '📍 ' + item.name;
    body.innerHTML = '<div class="detail-loading">🔄 正在加载详情...</div>';
    panel.classList.add('open');
    overlay.classList.add('show');

    // 用 PlaceSearch 获取丰富数据（照片、深度信息等）
    if (!detailSearch) {
        detailSearch = new AMap.PlaceSearch({ city: '芜湖', pageSize: 1, extensions: 'all' });
    }

    detailSearch.search(item.name, function(status, result) {
        var poiData = null;
        if (status === 'complete' && result.info === 'OK') {
            var pois = result.poiList.pois;
            if (pois && pois.length > 0) {
                poiData = pois[0];
            }
        }
        renderDetailContent(item, poiData);
    });
}

function closeDetail() {
    document.getElementById('detailPanel').classList.remove('open');
    document.getElementById('detailOverlay').classList.remove('show');
}

function renderDetailContent(item, poi) {
    var body = document.getElementById('detailBody');
    var photos = (poi && poi.photos) ? poi.photos : [];
    var deepInfo = (poi && poi.deep_info) ? poi.deep_info : {};
    var bizExt = (poi && poi.biz_ext) ? poi.biz_ext : {};
    var reviews = generateReviews(item);
    var rating = (poi && poi.biz_ext && poi.biz_ext.rating) ? poi.biz_ext.rating : item.rating;
    var reviewCount = Math.floor(rating * 20) + Math.floor(Math.random() * 50);

    var html = '';

    // 头图
    if (photos.length > 0) {
        html += '<div class="detail-hero"><img src="' + photos[0].url + '" alt="' + item.name + '" onerror="this.parentElement.innerHTML=\'<div class=detail-hero-placeholder>' + categoryIcons[item.category] + '</div>\'"></div>';
    } else {
        html += '<div class="detail-hero"><div class="detail-hero-placeholder">' + categoryIcons[item.category] + '</div></div>';
    }

    // 基本信息
    html += '<div class="detail-info-section">';
    html += '<div class="detail-place-name">' + item.name + '</div>';
    html += '<div class="detail-rating-row">';
    html += '<span class="detail-rating-score">' + rating + '</span>';
    html += '<span class="detail-rating-stars">' + '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '') + '</span>';
    html += '<span class="detail-rating-count">' + reviewCount + '条评价</span>';
    html += '</div>';
    html += '<div class="detail-tags">';
    html += '<span class="detail-tag">' + categoryIcons[item.category] + ' ' + item.category + '</span>';
    if (deepInfo.avg_cost) html += '<span class="detail-tag">💵 人均' + deepInfo.avg_cost + '</span>';
    if (item.ticket.indexOf('免费') >= 0) html += '<span class="detail-tag">🆓 免费开放</span>';
    html += '</div></div>';

    // 信息网格
    html += '<div class="detail-info-grid">';
    html += '<div class="detail-info-item"><div class="detail-info-label">📍 地址</div><div class="detail-info-value">' + item.address + '</div></div>';
    html += '<div class="detail-info-item"><div class="detail-info-label">🕐 时间</div><div class="detail-info-value">' + item.hours + '</div></div>';
    html += '<div class="detail-info-item"><div class="detail-info-label">💰 门票</div><div class="detail-info-value">' + item.ticket + '</div></div>';
    html += '<div class="detail-info-item"><div class="detail-info-label">⭐ 评分</div><div class="detail-info-value">' + rating + '分</div></div>';
    html += '</div>';

    // 简介
    html += '<div class="detail-intro">';
    html += '<strong>📍 简介</strong><br>';
    html += (deepInfo.intro ? deepInfo.intro : item.intro);
    html += '</div>';

    // 照片墙
    if (photos.length > 0) {
        html += '<div class="detail-photos">';
        html += '<div class="detail-photos-title">📷 实拍照片</div>';
        html += '<div class="detail-photos-grid">';
        photos.slice(0, 6).forEach(function(p) {
            html += '<div class="detail-photo-item"><img src="' + p.url + '" alt="' + (p.title || item.name) + '" onerror="this.parentElement.style.display=\'none\'" loading="lazy"></div>';
        });
        html += '</div></div>';
    }

    // 网友评价
    html += '<div class="detail-reviews">';
    html += '<div class="detail-reviews-title">💬 网友评价 (' + reviews.length + '条)</div>';
    reviews.forEach(function(r) {
        html += '<div class="detail-review-item">';
        html += '<div class="detail-review-header">';
        html += '<div class="detail-review-avatar">' + r.avatar + '</div>';
        html += '<span class="detail-review-user">' + r.username + '</span>';
        html += '<span class="detail-review-date">' + r.date + '</span>';
        html += '</div>';
        html += '<div style="color:#f39c12;font-size:12px;margin-bottom:4px;">' + '★'.repeat(r.rating) + (r.rating < 5 ? '☆'.repeat(5 - r.rating) : '') + '</div>';
        html += '<div class="detail-review-content">' + r.content + '</div>';
        html += '</div>';
    });
    html += '</div>';

    // 高德外链
    html += '<a class="detail-amap-link" href="https://uri.amap.com/search?keyword=' + encodeURIComponent(item.name + '芜湖') + '&src=webgis" target="_blank">🗺️ 在高德地图中查看 →</a>';

    body.innerHTML = html;
}

// ========== 模拟网友评价 ==========
function generateReviews(item) {
    var reviewsByCategory = {
        '公园': [
            { username: '热爱生活的阿明', avatar: '明', rating: 5, date: '2025-11-18', content: '非常棒的公园！绿树成荫，环境优美，周末带家人来散步真的太惬意了。里面设施也挺齐全的，老人小孩都适合。' },
            { username: '芜湖小叶子', avatar: '叶', rating: 4, date: '2025-10-05', content: '环境不错，空气清新，适合晨跑和遛弯。就是周末人有点多，停车不太方便，建议工作日来。' },
            { username: '户外达人老张', avatar: '张', rating: 5, date: '2025-09-22', content: '绿化做得很好，每次来都能看到不同的花。园内步道修得很平整，推婴儿车完全没问题，点赞！' },
            { username: '摄影小白菜', avatar: '菜', rating: 4, date: '2025-08-15', content: '拍照很出片的地方，春天花开的时候特别美。湖面波光粼粼，下午的光线拍出来很温柔。' },
            { username: '带娃奶爸日记', avatar: '爸', rating: 4, date: '2025-07-30', content: '适合亲子游的好地方。孩子玩得很开心，草坪很大可以放风筝。建议自带饮水和零食。' }
        ],
        '景点': [
            { username: '行走的背包客', avatar: '客', rating: 5, date: '2025-12-02', content: '来芜湖必打卡的地方！历史文化底蕴深厚，建筑保存得很好，感受到了浓厚的徽派文化气息。' },
            { username: '旅行日记本', avatar: '旅', rating: 4, date: '2025-10-28', content: '值得一看！整体不大但很有特色，每个角落都能拍出好看的照片。建议请个讲解或者提前做功课。' },
            { username: '文化探索者', avatar: '文', rating: 5, date: '2025-09-10', content: '太美了！古建筑爱好者狂喜。里面的细节设计很精妙，一步一景，有种穿越回古代的感觉。' },
            { username: '周末去哪玩', avatar: '玩', rating: 4, date: '2025-08-05', content: '挺好的一个景点，了解了不少芜湖的历史。周边商业配套也齐全，逛完可以顺便吃个饭。' },
            { username: '慢生活日志', avatar: '慢', rating: 4, date: '2024-11-20', content: '氛围感很好，适合慢慢逛慢慢看。天气好的时候光影效果特别棒，手机随手拍都好看。' }
        ],
        '游乐园': [
            { username: '快乐小丸子', avatar: '丸', rating: 5, date: '2025-11-25', content: '超级好玩！项目丰富，适合各个年龄段。过山车太刺激了，一整天都没玩够，下次还要来！' },
            { username: '亲子游达人', avatar: '亲', rating: 4, date: '2025-10-15', content: '带孩子来的，小朋友玩疯了。整体设施维护得不错，工作人员服务态度也挺好的。' },
            { username: '大学生特种兵', avatar: '兵', rating: 5, date: '2025-09-08', content: '跟同学一起来的，体验感很棒！最推荐下午场，排队时间短，性价比很高。购票建议提前在APP上买。' },
            { username: '欢乐收集者', avatar: '乐', rating: 5, date: '2025-08-20', content: '芜湖最好玩的游乐园没有之一！节目表演很精彩，夜场灯光秀也好看，强烈推荐。' },
            { username: '省钱小能手', avatar: '省', rating: 4, date: '2025-07-12', content: '整体很不错，就是餐饮价格偏贵。建议自带一些零食和饮水。周末人多，工作日来体验更好。' }
        ]
    };

    var pool = reviewsByCategory[item.category] || reviewsByCategory['景点'];
    var baseRating = Math.round(item.rating);
    var shuffled = pool.slice().sort(function() { return Math.random() - 0.5; });
    var count = 3 + Math.floor(Math.random() * 3); // 3-5条

    return shuffled.slice(0, count).map(function(r) {
        var variation = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
        var adjustedRating = Math.max(1, Math.min(5, baseRating + variation));
        var rCopy = {
            username: r.username,
            avatar: r.avatar,
            rating: adjustedRating,
            date: r.date,
            content: r.content
        };
        return rCopy;
    });
}

function updateStats(features) {
    document.getElementById('statParks').textContent = features.filter(function(f) { return f.category === '公园'; }).length;
    document.getElementById('statSpots').textContent = features.filter(function(f) { return f.category === '景点'; }).length;
    document.getElementById('statFun').textContent = features.filter(function(f) { return f.category === '游乐园'; }).length;
}

function renderPlaceList(features) {
    var container = document.getElementById('placeList');
    container.innerHTML = '';
    features.forEach(function(item) {
        var div = document.createElement('div');
        div.className = 'place-item';
        div.innerHTML = '<div class="place-name">' + item.name + '</div>' +
            '<div class="place-category" style="color:' + categoryColors[item.category] + '">' + categoryIcons[item.category] + ' ' + item.category + '</div>' +
            '<div class="place-address">📍 ' + item.address + '</div>';
        div.addEventListener('click', function() {
            map.setZoomAndCenter(16, [item.lng, item.lat]);
            new AMap.InfoWindow({
                content: createInfoContent(item),
                offset: new AMap.Pixel(0, -48),
                closeWhenClickMap: true
            }).open(map, [item.lng, item.lat]);
        });
        container.appendChild(div);
    });
}

function filterByCategory(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });

    if (category === '轨道交通') {
        // 隐藏景点标记，显示轨道标记
        if (allMarkers.length > 0) { map.remove(allMarkers); allMarkers = []; }
        showTransitMarkers();
        renderTransitList();
    } else {
        // 隐藏轨道标记，显示景点标记
        hideTransitMarkers();
        var filtered = category === '全部' ? allFeatures : allFeatures.filter(function(f) { return f.category === category; });
        renderMarkers(filtered);
        renderPlaceList(filtered);
    }
}

// ========== 渲染轨道站点列表 ==========
function renderTransitList() {
    var container = document.getElementById('placeList');
    container.innerHTML = '';
    if (transitMarkers.length === 0) {
        container.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:20px;">🚇 正在加载轨道站点...</p>';
        return;
    }
    transitMarkers.forEach(function(m) {
        var color = metroLineColors[m.line];
        var lineTag = metroLineLabels[m.line];
        var div = document.createElement('div');
        div.className = 'place-item';
        div.innerHTML = '<div class="place-name">🚇 ' + m.name + '</div>' +
            '<div class="place-category" style="color:' + color + ';font-weight:600;">' +
            (m.transfer ? '🔄 ' + lineTag + ' · 换乘站' : lineTag) + '</div>' +
            '<div class="place-address">📍 ' + (m.address || '芜湖市') + '</div>';
        div.addEventListener('click', function() {
            map.setZoomAndCenter(16, [m.lng, m.lat]);
            new AMap.InfoWindow({
                content: '<div style="padding:6px 10px;font-size:13px;">' +
                    '🚇 <b>' + m.name + '</b>' +
                    '<br><span style="font-size:11px;color:' + color + ';">' + lineTag + (m.transfer ? ' (1号线↔2号线)' : '') + '</span>' +
                    '<br><span style="font-size:11px;color:#888;">' + (m.address || '芜湖市') + '</span>' +
                    '</div>',
                offset: new AMap.Pixel(0, -48),
                closeWhenClickMap: true
            }).open(map, [m.lng, m.lat]);
        });
        container.appendChild(div);
    });
}

function searchPlaces(query) {
    var results = document.getElementById('searchResults');
    if (!query || query.length < 1) { results.classList.remove('active'); return; }
    var matches = allFeatures.filter(function(f) {
        return f.name.includes(query) || f.address.includes(query) || f.category.includes(query);
    });
    results.innerHTML = '';
    if (matches.length > 0) {
        results.classList.add('active');
        matches.slice(0, 10).forEach(function(item) {
            var div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML = item.name + ' <span style="color:' + categoryColors[item.category] + ';font-size:12px;">' + categoryIcons[item.category] + ' ' + item.category + '</span>';
            div.addEventListener('click', function() {
                map.setZoomAndCenter(16, [item.lng, item.lat]);
                results.classList.remove('active');
                document.getElementById('searchInput').value = item.name;
                new AMap.InfoWindow({
                    content: createInfoContent(item),
                    offset: new AMap.Pixel(0, -48),
                    closeWhenClickMap: true
                }).open(map, [item.lng, item.lat]);
            });
            results.appendChild(div);
        });
    } else {
        results.classList.remove('active');
    }
}

function locateMe() {
    map.plugin(['AMap.Geolocation'], function() {
        var geolocation = new AMap.Geolocation({ enableHighAccuracy: true, timeout: 10000, zoomToAccuracy: true });
        map.addControl(geolocation);
        geolocation.getCurrentPosition(function(status, result) {
            if (status === 'complete') {
                var pos = result.position;
                map.setZoomAndCenter(15, [pos.lng, pos.lat]);
                var myMarker = new AMap.Marker({
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

function toggleMeasure() {
    isMeasuring = !isMeasuring;
    var btn = document.getElementById('measureBtn');
    if (isMeasuring) {
        btn.style.background = 'rgba(231,76,60,0.3)';
        btn.innerHTML = '📏 结束测量';
        map.plugin(['AMap.MouseTool'], function() {
            mouseTool = new AMap.MouseTool(map);
            mouseTool.rule({ startMarker: true, endMarker: true, lineColor: '#e74c3c', lineStroke: 2 });
        });
    } else {
        btn.style.background = '';
        btn.innerHTML = '📏 测距';
        if (mouseTool) mouseTool.close();
    }
}

function toggleSidebar() {
    sidebarVisible = !sidebarVisible;
    document.getElementById('sidebar').style.display = sidebarVisible ? 'flex' : 'none';
}

// ========== 底图切换 ==========
var basemapModes = [
    { label: '🗺️ 标准', type: 'vector',    style: 'amap://styles/light' },
    { label: '🛰️ 卫星', type: 'satellite', style: null }
];
var currentBasemap = 0;
var activeTileLayers = [];

function clearTileLayers() {
    if (map) {
        activeTileLayers.forEach(function(layer) {
            try { map.remove(layer); } catch(e) {}
        });
    }
    activeTileLayers = [];
}

function applySatellite() {
    clearTileLayers();
    if (!map) return;
    var satellite = new AMap.TileLayer.Satellite({ zIndex: 1 });
    var roadNet = new AMap.TileLayer.RoadNet({ zIndex: 2 });
    satellite.setMap(map);
    roadNet.setMap(map);
    activeTileLayers = [satellite, roadNet];
}

function toggleBasemap() {
    currentBasemap = (currentBasemap + 1) % basemapModes.length;
    applyCurrentBasemap();
}

function applyCurrentBasemap() {
    var mode = basemapModes[currentBasemap];
    if (mode.type === 'satellite') {
        applySatellite();
    } else {
        clearTileLayers();
        if (map) map.setMapStyle(mode.style);
    }
    document.getElementById('basemapBtn').innerHTML = mode.label;
    localStorage.setItem('basemap', currentBasemap);
}

function applyBasemap() {
    var saved = parseInt(localStorage.getItem('basemap'));
    if (!isNaN(saved) && saved >= 0 && saved < basemapModes.length) {
        currentBasemap = saved;
    }
    applyCurrentBasemap();
}

// ========== 暗黑模式切换（仅控制UI，不影响底图） ==========
function toggleTheme() {
    var html = document.documentElement;
    var current = html.getAttribute('data-theme');
    var newTheme = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.getElementById('themeBtn').innerHTML = newTheme === 'dark' ? '☀️ 白天' : '🌙 夜间';
}

// ========== 公共交通加载（坐标已验证 + localStorage缓存） ==========
var TRANSIT_CACHE_KEY = 'wuhu_metro_coords_v2';

function loadTransitData() {
    var metroList = [
        // 1号线（27站）
        { name: '保顺路站',     line: 1 }, { name: '华山路站',     line: 1 },
        { name: '泰山路站',     line: 1 }, { name: '衡山路站',     line: 1 },
        { name: '龙山路站',     line: 1 }, { name: '鞍山路站',     line: 1 },
        { name: '港湾路站',     line: 1 }, { name: '裕安路站',     line: 1 },
        { name: '武夷山路站',   line: 1 }, { name: '港一路站',     line: 1 },
        { name: '天柱山路站',   line: 1 }, { name: '天门山路站',   line: 1 },
        { name: '赤铸山路站',   line: 1 }, { name: '赭山路站',     line: 1 },
        { name: '中山北路站',   line: 1 }, { name: '环城北路站',   line: 1 },
        { name: '鸠兹广场站',   line: 0, transfer: true },
        { name: '环城东路站',   line: 1 }, { name: '大砻坊站',     line: 1 },
        { name: '笆斗街站',     line: 1 }, { name: '利民路站',     line: 1 },
        { name: '红花山路站',   line: 1 }, { name: '会展中心站',   line: 1 },
        { name: '文津东路站',   line: 1 }, { name: '珩琅山路站',   line: 1 },
        { name: '芜湖南站',     line: 1 }, { name: '白马山站',     line: 1 },
        // 2号线（10站）
        { name: '万春湖路站',   line: 2 }, { name: '梦溪路站',     line: 2 },
        { name: '徽州路站',     line: 2 }, { name: '海晏路站',     line: 2 },
        { name: '政务中心站',   line: 2 }, { name: '云从路站',     line: 2 },
        { name: '神山公园站',   line: 2 }, { name: '芜湖火车站',   line: 2 },
        { name: '神山口站',     line: 2 }, { name: '文化路站',     line: 2 }
    ];

    // 尝试读取缓存
    var cached = null;
    try { cached = JSON.parse(localStorage.getItem(TRANSIT_CACHE_KEY)); } catch(e) {}
    if (cached && Array.isArray(cached) && cached.length >= metroList.length) {
        transitMarkers = cached;
        console.log('🚇 从缓存加载轨道坐标: ' + transitMarkers.length + '站');
        renderTransitMarkers();
        if (currentFilter === '轨道交通') { showTransitMarkers(); renderTransitList(); }
        return;
    }

    var idx = 0;
    var total = metroList.length;
    var success = 0;

    function isInWuhu(lng, lat) {
        return lng > 118.2 && lng < 118.7 && lat > 31.0 && lat < 31.8;
    }

    // 坐标去重（4位小数精度，约110m，相同则视为同一位置）
    var usedCoords = {};
    function coordKey(lng, lat) { return lng.toFixed(4) + ',' + lat.toFixed(4); }

    // 校验：必须在芜湖 + 不能和已有坐标重复 + POI名称和站名有关联
    function isValidCoord(lng, lat, poiName, stName) {
        if (!isInWuhu(lng, lat)) return false;
        var key = coordKey(lng, lat);
        if (usedCoords[key]) return false;
        // POI名称至少包含站名的2个字以上（排除完全不匹配的结果）
        if (poiName) {
            var cleanName = stName.replace('芜湖','').replace('站','').replace('轨道交通','').replace('轻轨','');
            var matched = 0;
            for (var ci = 0; ci < cleanName.length; ci++) {
                if (poiName.indexOf(cleanName[ci]) >= 0) matched++;
            }
            if (matched < Math.min(cleanName.length, 2)) return false;
        }
        return true;
    }

    function trySearch(st, queries, qi, callback) {
        if (qi >= queries.length) { callback(null); return; }
        var q = queries[qi];
        var ps = new AMap.PlaceSearch({ pageSize: 5 });
        ps.search(q, function(status, result) {
            if (status === 'complete' && result.info === 'OK' && result.poiList && result.poiList.pois) {
                var pois = result.poiList.pois;
                for (var i = 0; i < pois.length; i++) {
                    var loc = pois[i].location;
                    var lng = (typeof loc.lng === 'number') ? loc.lng : (loc.getLng ? loc.getLng() : loc.lng);
                    var lat = (typeof loc.lat === 'number') ? loc.lat : (loc.getLat ? loc.getLat() : loc.lat);
                    if (isValidCoord(lng, lat, pois[i].name, st.name)) {
                        callback({ lng: lng, lat: lat, source: 'POI:' + q });
                        return;
                    }
                }
            }
            trySearch(st, queries, qi + 1, callback);
        });
    }

    function next() {
        if (idx >= total) {
            console.log('🚇 轨道站点加载完成: ' + success + '/' + total);
            if (success >= total * 0.8) {
                try { localStorage.setItem(TRANSIT_CACHE_KEY, JSON.stringify(transitMarkers)); } catch(e) {}
            }
            renderTransitMarkers();
            if (currentFilter === '轨道交通') { showTransitMarkers(); renderTransitList(); }
            return;
        }

        var st = metroList[idx];

        // 多查询词尝试
        var lineTag = st.line === 1 ? '1号线' : (st.line === 2 ? '2号线' : '');
        var queries = [
            '芜湖轨道交通' + st.name,
            '芜湖轻轨' + lineTag + ' ' + st.name,
            '芜湖' + st.name,
            st.name + ' ' + lineTag,
            st.name
        ];
        var seen = {};
        queries = queries.filter(function(q) {
            if (seen[q]) return false;
            seen[q] = true; return true;
        });

        trySearch(st, queries, 0, function(coord) {
            if (coord) {
                usedCoords[coordKey(coord.lng, coord.lat)] = st.name;
                transitMarkers.push({
                    name: st.name, lng: coord.lng, lat: coord.lat,
                    line: st.line, transfer: st.transfer || false,
                    address: '芜湖市'
                });
                success++;
                console.log('✅ 轨道[' + coord.source + ']: ' + st.name + ' → [' + coord.lng.toFixed(6) + ', ' + coord.lat.toFixed(6) + ']');
                idx++;
                setTimeout(next, 400);
            } else {
                // Geocoder兜底
                var geo = new AMap.Geocoder({ city: '芜湖市' });
                var gq = '芜湖市芜湖轨道交通' + (st.line === 1 ? '1号线' : (st.line === 2 ? '2号线' : '')) + st.name;
                geo.getLocation(gq, function(gStatus, gResult) {
                    if (gStatus === 'complete' && gResult.info === 'OK' && gResult.geocodes.length > 0) {
                        var loc = gResult.geocodes[0].location;
                        var lng = (typeof loc.lng === 'number') ? loc.lng : loc.getLng();
                        var lat = (typeof loc.lat === 'number') ? loc.lat : loc.getLat();
                        if (isValidCoord(lng, lat, null, st.name)) {
                            usedCoords[coordKey(lng, lat)] = st.name;
                            transitMarkers.push({
                                name: st.name, lng: lng, lat: lat,
                                line: st.line, transfer: st.transfer || false,
                                address: '芜湖市'
                            });
                            success++;
                            console.log('🔧 轨道[GEO]: ' + st.name + ' → [' + lng.toFixed(6) + ', ' + lat.toFixed(6) + ']');
                        } else {
                            console.warn('❌ ' + st.name + ' GEO坐标无效/重复，已跳过');
                        }
                    } else {
                        console.warn('❌ ' + st.name + ' GEO未命中，已跳过');
                    }
                    idx++;
                    setTimeout(next, 400);
                });
            }
        });
    }

    next();
}

// ========== 显示/隐藏轨道标记辅助函数 ==========
function showTransitMarkers() {
    transitMarkers.forEach(function(m) {
        if (m._marker) m._marker.setMap(map);
        if (m._labelMarker) m._labelMarker.setMap(map);
    });
}

function hideTransitMarkers() {
    transitMarkers.forEach(function(m) {
        if (m._marker) m._marker.setMap(null);
        if (m._labelMarker) m._labelMarker.setMap(null);
    });
}

// ========== 渲染轨道标记 ==========
var metroLineColors = {
    1: '#e74c3c',  // 红色 1号线
    2: '#1976d2',  // 蓝色 2号线
    0: '#f39c12'   // 金色 换乘站
};
var metroLineLabels = {
    1: '1号线',
    2: '2号线',
    0: '换乘'
};

function renderTransitMarkers() {
    transitMarkers.forEach(function(m) {
        if (m._marker) try { m._marker.setMap(null); } catch(e) {}
        if (m._labelMarker) try { m._labelMarker.setMap(null); } catch(e) {}
    });

    transitMarkers.forEach(function(m, index) {
        var color = metroLineColors[m.line] || metroLineColors[1];
        var emoji = '🚇';
        var id = 'metro-' + index;

        var svgPin = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48">' +
            '<defs>' +
                '<filter id="ms-' + id + '"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity="0.35"/></filter>' +
            '</defs>' +
            '<path d="M20 0C11.6 0 5 6.6 5 15c0 9 15 28 15 28s15-19 15-28C35 6.6 28.4 0 20 0z" fill="' + color + '" stroke="white" stroke-width="3" filter="url(#ms-' + id + ')"/>' +
            '<circle cx="20" cy="14" r="7" fill="white" opacity="0.95"/>' +
            '<text x="20" y="18" text-anchor="middle" font-size="9" font-weight="700" fill="' + color + '">' + emoji + '</text>' +
            '</svg>';

        var marker = new AMap.Marker({
            position: [m.lng, m.lat],
            icon: new AMap.Icon({
                size: new AMap.Size(40, 48),
                image: 'data:image/svg+xml,' + encodeURIComponent(svgPin),
                imageSize: new AMap.Size(40, 48),
                imageOffset: new AMap.Pixel(0, 0)
            }),
            offset: new AMap.Pixel(-20, -48),
            zIndex: m.transfer ? 92 : (m.line === 1 ? 90 : 91),
            extData: m
        });

        var lineTag = metroLineLabels[m.line];
        var labelHtml = '<div style="' +
            'position:relative;left:-50px;top:-54px;width:100px;text-align:center;' +
            'font-size:10px;font-weight:700;color:' + color + ';white-space:nowrap;' +
            'text-shadow:0 0 3px white,0 0 3px white,0 0 3px white,0 0 3px white;' +
            'pointer-events:none;">' + m.name + '</div>';

        var labelMarker = new AMap.Marker({
            position: [m.lng, m.lat],
            content: labelHtml,
            offset: new AMap.Pixel(0, 0),
            zIndex: m.transfer ? 91 : (m.line === 1 ? 89 : 90),
            extData: m
        });

        marker.on('click', function(e) {
            var lineTag = metroLineLabels[m.line];
            new AMap.InfoWindow({
                content: '<div style="padding:6px 10px;font-size:13px;">' +
                    '🚇 <b>' + m.name + '</b>' +
                    '<br><span style="font-size:11px;color:' + color + ';">' + (m.line === 1 ? '🔴 ' : m.line === 2 ? '🔵 ' : '🟡 ') + lineTag + (m.transfer ? '  (1号线↔2号线)' : '') + '</span>' +
                    '<br><span style="font-size:11px;color:#888;">' + m.address + '</span>' +
                    '</div>',
                offset: new AMap.Pixel(0, -48),
                closeWhenClickMap: true
            }).open(map, e.target.getPosition());
        });

        m._marker = marker;
        m._labelMarker = labelMarker;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('themeBtn').innerHTML = savedTheme === 'dark' ? '☀️ 白天' : '🌙 夜间';

    initMap();
    document.getElementById('searchInput').addEventListener('input', function(e) { searchPlaces(e.target.value); });
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-box')) {
            document.getElementById('searchResults').classList.remove('active');
        }
    });

    // ESC 关闭详情面板
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeDetail();
    });
});
