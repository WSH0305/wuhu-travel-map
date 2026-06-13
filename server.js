// ============================================
// 芜湖文旅导览地图 - 本地开发服务器
// ============================================

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PROJECT_DIR = __dirname;

// MIME类型映射
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.geojson': 'application/json; charset=utf-8'
};

const server = http.createServer((req, res) => {
    // 获取请求的文件路径
    let filePath = '.' + (req.url === '/' ? '/index.html' : req.url);
    filePath = path.join(PROJECT_DIR, filePath);
    
    // 获取文件扩展名
    const ext = path.extname(filePath);
    
    // 读取文件
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // 文件不存在
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h1>404 - 文件未找到</h1><p>请检查文件路径是否正确</p>');
            return;
        }
        
        // 设置响应头
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        
        // 允许跨域（方便调试）
        res.writeHead(200, {
            'Content-Type': contentType,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
        });
        
        res.end(data);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('========================================');
    console.log('  🗺️  芜湖文旅导览地图 - 开发服务器');
    console.log('========================================');
    console.log(`  📍 本地地址: http://localhost:${PORT}`);
    console.log(`  📍 局域网地址: http://本机IP:${PORT}`);
    console.log('========================================');
    console.log('  按 Ctrl+C 停止服务器');
    console.log('========================================');
});
