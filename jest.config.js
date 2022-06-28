module.exports = {
    transform: {
        // .vue 文件用 vue-jest 处理
        '^.+\\.vue$': 'vue-jest',        
        '^.+\\.jsx?$': 'babel-jest', // .js或者 .jsx用 babel-jest处理        
        '^.+\\.tsx?$': 'ts-jest'    // .ts文件用ts-jest处理
    },
    testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
    // 如下两个设置是为了在根目录下生成coverage的测试文件
    collectCoverage: true,
    coverageReporters: ["json", 'html']
}