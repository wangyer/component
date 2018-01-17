<template>
    <div data-custom-input="text" class="custom-input-text">
        <input type="text" class="form-control text-right" id="text" placeholder="请输入姓名">
        <span  class="input-clear-icon">
            <b class="glyphicon glyphicon-remove"></b>
        </span>   
    </div>
</template>
<script>
    export default {
        mounted: function () {
            $('[data-custom-input=text]').find('input').focus(function (e) {
                $(e.target).css('padding-right','30px');
                $(e.target).next('.input-clear-icon').css('display','block');
            });

            $('[data-custom-input=text]').find('.input-clear-icon').click(function (e) {
                var parentObj = $(e.target).parents('.custom-input-text');
                parentObj.find('.form-control').val('');
                parentObj.find('.input-clear-icon').css('display','none');
                parentObj.find('.form-control').css('padding-right','12px');
            });
        }
    };
</script>
<style>
    .pr30 {
        padding-right: 30px;
    }
    .custom-input-text {
        position: relative;
    }
    .input-clear-icon {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 50%;
        border: 1px solid #999;
        display: none;
    }
    .custom-input-text .glyphicon{
        font-weight: normal;
        color: #999;
        cursor: pointer;
        font-size: 12px;
        top: 0;
    }
</style>