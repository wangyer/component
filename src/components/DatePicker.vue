<template>
    <div class='data-picker-container'>  
        <div class="form-group">  
            <label>选择日期：</label>  
            <!--指定 date标记-->  
            <div class='input-group date' id='datetimepicker1'>  
                <input type='text' class="form-control" readonly/>  
                <span class="input-group-addon">  
                    <span class="glyphicon glyphicon-calendar"></span>  
                </span>  
            </div>  
        </div>  
    </div>  
</template>
<script>
    export default {
        mounted: function () {
            $('#datetimepicker1').datetimepicker({   //日期选择框
                format: 'yyyy-mm-dd',
                language:  'zh-CN',
                weekStart: 1,
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                minView: 2,
                showMeridian: 1,
                pickerPosition: 'bottom-left'
            });
        }
    };
</script>
<style>
    .data-picker-container {
        margin-left: 15px;
        width: 238px;
        padding: 0;
    }
    .data-picker-container .form-control {
        background-color: #fff;
    }
</style>