const Mock = require('mockjs')

const data = Mock.mock({
    items: [
        {
            "alwaysShow": true,
            "children": [
                {
                    "component": "components/Echarts",
                    "hidden": false,
                    "meta": {
                        "icon": "chart",
                        "noCache": false,
                        "title": "图表库"
                    },
                    "name": "Echarts",
                    "path": "echarts"
                },
                {
                    "component": "components/icons/index",
                    "hidden": false,
                    "meta": {
                        "icon": "icon",
                        "noCache": true,
                        "title": "图标库"
                    },
                    "name": "Icons",
                    "path": "icon"
                },
                {
                    "component": "components/Editor",
                    "hidden": false,
                    "meta": {
                        "icon": "fwb",
                        "noCache": true,
                        "title": "富文本"
                    },
                    "name": "Editor",
                    "path": "tinymce"
                },
                {
                    "component": "components/MarkDown",
                    "hidden": false,
                    "meta": {
                        "icon": "markdown",
                        "noCache": true,
                        "title": "Markdown"
                    },
                    "name": "Markdown",
                    "path": "markdown"
                },
                {
                    "component": "components/YamlEdit",
                    "hidden": false,
                    "meta": {
                        "icon": "dev",
                        "noCache": true,
                        "title": "Yaml编辑器"
                    },
                    "name": "YamlEdit",
                    "path": "yaml"
                }
            ],
            "component": "Layout",
            "hidden": false,
            "meta": {
                "icon": "zujian",
                "noCache": true,
                "title": "组件管理"
            },
            "name": "组件管理",
            "path": "/components",
            "redirect": "noredirect"
        }
    ]
})

module.exports = [
    {
        url: '/router/list',
        type: 'get',
        response: config => {
            const items = data.items
            return {
                code: 200,
                data: {
                    total: items.length,
                    items: items
                }
            }
        }
    }
]