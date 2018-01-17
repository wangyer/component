<template>
    <div id="app">     
        <div class="wrap-container clearfix">
            <div class="ui-nav">
                <header>组件介绍文档</header>
                <ul class="nav-main-list">
                    <li>
                        <header>第一部分：UI组件</header>
                        <ul>
                            <li>按钮 (button)</li>
                            <li>按钮</li>
                            <li>按钮</li>
                            <li>按钮</li>
                            <li>按钮</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="ui-detail">
                <div class="article-list">
                    <div class="article-item">
                        <h2>按钮 button</h2>
                        <p class="simple-info">常用按钮button</p>
                        <h3>代码示例</h3>
                        <div class="example">
                            <div class="example-demo">
                                <ButtonCustom></ButtonCustom>
                            </div>
                            <div class="example-code" style="width:100%;">
                                 <pre class="prettyprint hljs-dark"><code class="language-vbscript-html hljs"><div class="hljs-line"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
</span></div><div class="hljs-line">     <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-custom-default"</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
</div><div class="hljs-line">     <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-custom-step"</span>&gt;</span>下一步<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
</div><div class="hljs-line">     <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-custom-back"</span>&gt;</span>上一步<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
</div><div class="hljs-line"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> 
</div></code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonCustom from '@/components/button.vue'
export default {
    name: 'app',
    components: {
        ButtonCustom
    },
    data () {
        return {
            navList:[
                'about 说明',
                'button 按钮',
                'input 输入框',
                'radio 单选框',
                '面包屑',
                'label 标签',
                'a 链接',
                'pagination 分页',
                'datePicker 日历',
                'jeDate 日历',
                'tabs 标签页',
                'backTop 返回顶部',
                'table 表格',
                'model 详情页对话框',
                'alert 弹框',
                'imgUpload 上传图片',
                'treeMenu 树组件',
                'select 选择器',
                'loading 加载中',
                'Icon 小图标',
                'tips 3秒消失提示'
            ],
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
    * {
        padding: 0;
        margin: 0;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body{
        position: relative;
        width: 100%;
        height: 100%;
        background: #e8e8e8;
        color: #333;
    }
    ul, li {
        list-style: none;
    }
    #app {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .ui-nav {
        width: 300px;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
        & > header {
            display: block;
            padding: 16px 12px;
            border-bottom: none;
            color: #1c78c0;
            background-color: #fafafa;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
        }
        & > ul > li{
            & > header {
                font-weight: bold;
                height: 45px;
                line-height: 45px;
            }
            padding: 0 12px;
            font-size: 14px;
            color: #333;

            li {
                height: 39px;
                line-height: 39px;
                padding-left: 24px;
                cursor: pointer;
            }
        }
    }
    .article-list {
        width: 800px;
        margin: 30px auto;
        .article-item{
            margin-bottom: 20px;
            h2{
                font-weight: normal;
                font-size: 24px;
                margin-bottom: 10px;
            }
            h3{
                font-weight: normal;
                font-size: 18px;
                margin: 20px 0;
            }
            .example{
                border-radius: 4px;
                border: 1px solid #d7dde4;
                overflow: hidden;
                .section{
                    font-size: 13px;
                    padding: 5px 0 0px;
                }
                .example-demo{
                    width: 50%;
                    box-sizing: border-box;
                    padding: 20px;
                }
                .example-code{
                    width: 50%;
                    padding: 10px;
                    box-sizing: border-box;
                }
            }
        }
    }
    pre{
        margin: 0;
    }
    .hljs{
        border-radius: 4px;
        background: #1f1f1f!important;
        padding: 1rem!important;
        font-family: Consolas;
        font-size: 13px;
    }

    .wrap-container{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background: #fff;
        margin: 0 auto;
        .ui-nav{
            
        }
        .ui-detail{
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            overflow-y: auto;
            color: #000;
            background: #fff;
            -webkit-transition: left 250ms ease;
            -moz-transition: left 250ms ease;
            -o-transition: left 250ms ease;
            transition: left 250ms ease;
            box-sizing: border-box;
            margin-left: 300px;
            .article-item{
                margin-bottom: 20px;
                h2{
                    font-weight: normal;
                    font-size: 24px;
                    margin-bottom: 10px;
                }
                h3{
                    font-weight: normal;
                    font-size: 18px;
                    margin: 20px 0;
                }
                .example{
                    border-radius: 4px;
                    border: 1px solid #d7dde4;
                    overflow: hidden;
                    .section{
                        font-size: 13px;
                        padding: 5px 0 0px;
                    }
                    .example-demo{
                        width: 50%;
                        box-sizing: border-box;
                        padding: 20px;
                    }
                    .example-code{
                        width: 50%;
                        padding: 10px;
                        box-sizing: border-box;
                    }
                }
            }
        }
    }
</style>

