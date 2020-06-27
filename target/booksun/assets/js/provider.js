window.onload = function () {
    var list;
    var count;
    var now = 1;

    $.get("provider_queryProvider.action", {
        page: 1, rows: 5, 'pname': ' '
    }, function (data, status) {
        list = data;
        //alert("数据: " + JSON.stringify(list) + "\n状态: " + status);
        //alert(list.rows[1].address);
        count = Math.floor((list.total + 4) / 5);
        //alert(Math.floor(9/5));
        //alert(page);
        var last = now - 1;
        //alert(now); q
        if (now > 1) {

            //alert(last);
            $("#pagination").append("<li class=\"am-pagination-prev \">\n" +
                "        <a href=\"#\" class=\"\" onclick='getProvider(" + last + ")'>上一页</a>\n" +
                "      </li>");
        } else {
            $("#pagination").append("<li class=\"am-pagination-prev am-disabled \">\n" +
                "        <a href=\"#\" class=\"\" onclick='getProvider(" + last + ")'>上一页</a>\n" +
                "      </li>");
        }

        $("#pagination").append(" <li class=\"am-pagination-select\" >\n" +
            "          <select id='select'>");

        for (var i = 1; i <= count; i++) {
            if (i == now) {
                b = "  <option value=\"#\" class=\"\" selected=\"selected\" onclick='getProvider(" + i + ")'>" + i + "\n" +
                    "\n" +
                    "</option>"
            } else {
                b = "  <option value=\"#\" class=\"\" onclick='getProvider(" + i + ")'>" + i + "\n" +
                    "\n" +
                    "</option>"
            }
            $("#select").append(b);
        }

        $("#pagination").append(" </select>\n" +
            "        </li>");

        if (count != 1 && now != count) {

            //alert(now);
            var next = now + 1;
            //alert(next+"1lalal");
            $("#pagination").append(" <li class=\"am-pagination-next \">\n" +
                "        <a href=\"#\" class=\"\" onclick='getProvider(" + next + ")'>下一页</a>\n" +
                "      </li>");
        }


        for (var i = 0; i < list.rows.length; i++) {
            //alert(list.rows);
            //alert(obj.pno);

            var a = 1;
            s = "<tr><td><input type=\"checkbox\" name='check' value='" + list.rows[i].pno + "' /></td><td>" + i + "</td><td>" + list.rows[i].pno +
                "</td>+<td>" + list.rows[i].pname + "</td><td>" +
                list.rows[i].phone + "</td><td>" +
                list.rows[i].infor + "</td><td>" +
                list.rows[i].address + "</td>" + "<td>" +
                "<div class=\"tpl-table-black-operation\">\n" +
                "<a href=\"javascript:;\" onclick= editProvider('" +
                list.rows[i].pno + "','" + list.rows[i].pname + "','" +
                list.rows[i].infor + "','" +
                list.rows[i].address + "','" +
                list.rows[i].phone + "')>" +
                "<i class=\"am-icon-pencil\"></i> 编辑\n" +
                "</a>\n" +

                "<a href=\"javascript:;\" class=\"tpl-table-black-operation-del\" onclick=delprovider('" + list.rows[i].pno + "')>\n" +
                "<i class=\"am-icon-trash\"></i> 删除\n" +
                "</a>\n" +
                "</div>\n" +
                "</td></tr>";
            // alert(s);
            $("#test").append(s);

        }


    });

    var Menu;
    $.get("getmenu.action", function (data, status) {
        Menu = data;
        //alert("数据: " +JSON.stringify(Menu) + "\n状态: " + status);
        menuTree(Menu, document.getElementById('tree'), 'tree');
    });

}

$(document).ready(function () {

    $('#doc-prompt-toggle').on('click', function () {
        //alert("123");
        $('#addpname').val("");
        $('#addphone').val("");
        $('#addaddress').val("");
        $('#addinfor').val("");
        $('#my-prompt').modal({
            relatedTarget: this,
            onConfirm: function (e) {
                //alert(e.data[2])
                if ($('#addpname').val().length != 0 && $('#addphone').val().length != 0 && $('#addaddress').val().length != 0 && $('#addinfor').val().length != 0) {
                    $.post("provider_saveProvider.action",
                        {
                            'pno': 1,
                            'pname': e.data[0],
                            'phone': e.data[1],
                            'infor': e.data[2],
                            'address': e.data[3]
                        },
                        function (data, status) {
                            //alert("数据: \n" + data + "\n状态: " + status);
                            if (status == 'success') {
                                alert("插入成功!");
                                getProvider(1);
                            }

                        });
                } else {
                    alert("字段填写错误!");
                }


                //alert('你输入的是：' + e.data[0] || '')
            },
            onCancel: function (e) {
                alert('取消添加供应商信息!');
            }
        });
    });

    $("#search").click(function () {
        var text = $("#searchtext").val();
        var list;
        //alert(text);
        //getProvider();

        $.get("provider_queryProvider.action", {
            page: 1, rows: 5, 'pname': text
        }, function (data, status) {

            list = data;
            var now = 1;

            //alert("数据: " + JSON.stringify(list) + "\n状态: " + status);
            //alert(list.rows[1].address);
            $("#test").empty();
            $("#pagination").empty();
            var count = Math.floor((list.total + 4) / 5);
            //alert(Math.floor(9/5));
            //alert(page);
            var last = now - 1;
            var next = now + 1;
            if (now > 1) {

                $("#pagination").append("<li class=\"am-pagination-prev \">\n" +
                    "        <a href=\"#\" class=\"\" onclick='getProvider(" + last + ")'>上一页</a>\n" +
                    "      </li>");
            } else {
                $("#pagination").append("<li class=\"am-pagination-prev am-disabled \">\n" +
                    "        <a href=\"#\" class=\"\" onclick='getProvider(" + last + ")'>上一页</a>\n" +
                    "      </li>");
            }

            $("#pagination").append(" <li class=\"am-pagination-select\" >\n" +
                "          <select id='select'>");

            for (var i = 1; i <= count; i++) {

                b = "  <option value=\"#\" class=\"\" onclick='getProvider(" + i + ")'>" + i + "\n" +
                    "\n" +
                    "</option>"

                $("#select").append(b);
            }

            $("#pagination").append(" </select>\n" +
                "        </li>");

            if (count != 1 && now != count) {
                //alert(next);
                $("#pagination").append(" <li class=\"am-pagination-next \">\n" +
                    "        <a href=\"#\" class=\"\" onclick='getProvider(" + next + ")'>下一页</a>\n" +
                    "      </li>");
            }

            for (var i = 0; i < list.rows.length; i++) {

                //alert(list.rows);
                s = "<tr><td><input type=\"checkbox\" name='check' value='" + list.rows[i].pno + "' /></td><td>" + i + "</td><td>" + list.rows[i].pno +
                    "</td>+<td>" + list.rows[i].pname + "</td><td>" +
                    list.rows[i].phone + "</td><td>" +
                    list.rows[i].infor + "</td><td>" +
                    list.rows[i].address + "</td>" + "<td>" +
                    "<div class=\"tpl-table-black-operation\">\n" +
                    "<a href=\"javascript:;\" onclick= editProvider('" +
                    list.rows[i].pno + "','" + list.rows[i].pname + "','" +
                    list.rows[i].infor + "','" +
                    list.rows[i].address + "','" +
                    list.rows[i].phone + "')>" +
                    "<i class=\"am-icon-pencil\"></i> 编辑\n" +
                    "</a>\n" +

                    "<a href=\"javascript:;\" class=\"tpl-table-black-operation-del\" onclick=delprovider('" + list.rows[i].pno + "')>\n" +
                    "<i class=\"am-icon-trash\"></i> 删除\n" +
                    "</a>\n" +
                    "</div>\n" +
                    "</td></tr>";
                // alert(s);
                $("#test").append(s);

            }

        });


    });


//全选/全不选
    $("#checkAll").bind("click", function () {
        $("input[name='check']").prop("checked", this.checked);
        //显示删除按钮
        /*if(this.checked == true){
           $("input[name='Delete'").css("display",'block');
        }else{
           $("input[name='Delete'").css("display",'none');
        }*/
    });

//批量删除
    $("#deleteall").click(function () {
        if (confirm('确定要删除所选吗?')) {
            var checks = $("input[name='check']:checked");
            if (checks.length == 0) {
                alert('未选中任何项！');
                return false;
            }
            //将获取的值存入数组
            var checkData = new Array();
            checks.each(function () {
                checkData.push($(this).val());
            });
            //alert(checkData);
            for (x in checkData) {
                $.post("provider_deleteProvider.action",
                    {
                        pno: checkData[x]
                    },
                    function (data, status) {
                        //alert("数据: " + JSON.stringify(data) + "\n状态: " + status);
                        alert(data.status);
                        getProvider(1);
                    });

                alert(checkData[x]);
            }
        }
    });


});

function getProvider(noww) {
    var list;
    $.get("provider_queryProvider.action", {
        page: noww, rows: 5, 'pname': " "
    }, function (data, status) {

        //alert("数据: " + JSON.stringify(list) + "\n状态: " + status);
        //alert(list.rows[1].address);
        $("#test").empty();
        $("#pagination").empty();

        list = data;
        //alert("数据: " + JSON.stringify(list) + "\n状态: " + status);
        //alert(list.rows[1].address);
        var count = Math.floor((list.total + 4) / 5);
        //alert(Math.floor(9/5));
        //alert(page);
        var last = noww - 1;
        var next = noww + 1;
        if (noww > 1) {

            $("#pagination").append("<li class=\"am-pagination-prev\">\n" +
                "        <a href=\"#\" class=\"\" onclick='getProvider(" + last + ")'>上一页</a>\n" +
                "      </li>");
        } else {
            $("#pagination").append("<li class=\"am-pagination-prev am-disabled \">\n" +
                "        <a href=\"#\" class=\"\" onclick='getProvider(" + last + ")'>上一页</a>\n" +
                "      </li>");
        }

        $("#pagination").append(" <li class=\"am-pagination-select\" >\n" +
            "          <select id='select'>");

        for (var i = 1; i <= count; i++) {
            if (i == noww) {
                b = "  <option value=\"#\" class=\"\" selected=\"selected\" onclick='getProvider(" + i + ")'>" + i + "\n" +
                    "\n" +
                    "</option>"
            } else {
                b = "  <option value=\"#\" class=\"\" onclick='getProvider(" + i + ")'>" + i + "\n" +
                    "\n" +
                    "</option>"
            }
            $("#select").append(b);
        }

        $("#pagination").append(" </select>\n" +
            "        </li>");

        if (count != 1 && noww != count) {
            //alert(now);

            $("#pagination").append(" <li class=\"am-pagination-next \">\n" +
                "        <a href=\"#\" class=\"\" onclick='getProvider(" + next + ")'>下一页</a>\n" +
                "      </li>");
        }
        for (var i = 0; i < list.rows.length; i++) {
            //alert(list.rows);

            s = "<tr><td><input type=\"checkbox\" name='check' value='" + list.rows[i].pno + "' /></td><td>" + i + "</td><td>" + list.rows[i].pno +
                "</td>+<td>" + list.rows[i].pname + "</td><td>" +
                list.rows[i].phone + "</td><td>" +
                list.rows[i].infor + "</td><td>" +
                list.rows[i].address + "</td>" + "<td>" +
                "<div class=\"tpl-table-black-operation\">\n" +
                "<a href=\"javascript:;\" onclick= editProvider('" +
                list.rows[i].pno + "','" + list.rows[i].pname + "','" +
                list.rows[i].infor + "','" +
                list.rows[i].address + "','" +
                list.rows[i].phone + "')>" +
                "<i class=\"am-icon-pencil\"></i> 编辑\n" +
                "</a>\n" +

                "<a href=\"javascript:;\" class=\"tpl-table-black-operation-del\" onclick=delprovider('" + list.rows[i].pno + "')>\n" +
                "<i class=\"am-icon-trash\"></i> 删除\n" +
                "</a>\n" +
                "</div>\n" +
                "</td></tr>";
            // alert(s);
            $("#test").append(s);

        }

    });
}

function delprovider(id) {
    alert(id);
    $('#pid').val(id);
    $('#my-confirm').modal({
        relatedTarget: this,
        onConfirm: function (options) {
            //alert($('#gid').val());
            $.post("provider_deleteProvider.action",
                {
                    'pno': $('#pid').val()
                },
                function (data, status) {
                    //alert("数据: " + JSON.stringify(data) + "\n状态: " + status);
                    //alert(data.status);
                    getProvider(1);
                });
        },
        // closeOnConfirm: false,
        onCancel: function () {
            alert('算逑，不弄了');
        }
    });
}

function editProvider(pno, pname, infor, address, phone) {
    // alert(pno);
    // alert(pname);
    // alert(infor);
    // alert(address);
    // alert(phone);
    $('#edit_pid').val(pno);
    $('#pname_edit').val(pname);
    $('#phone_edit').val(phone);
    $('#address_edit').val(address);
    $('#infor_edit').val(infor)

    $('#my-prompt2').modal({
        relatedTarget: this,
        onConfirm: function (e) {
            if ($('#pname_edit').val().length != 0 && $('#phone_edit').val().length != 0 && $('#address_edit').val().length != 0 && $('#infor_edit').val().length != 0) {

                $.post("provider_editProvider.action",
                    {
                        "pno": $('#edit_pid').val(),
                        'pname': $('#pname_edit').val(),
                        'phone': $('#phone_edit').val(),
                        'infor': $('#infor_edit').val(),
                        'address': $('#address_edit').val()
                    },
                    function (data, status) {
                        //alert("数据: " + JSON.stringify(data) + "\n状态: " + status);
                        alert(data.status);
                        getProvider(1);
                    });
            } else {
                alert("填写字段有误！");
            }

        },
        // closeOnConfirm: false,
        onCancel: function () {
            alert('算逑，不弄了');
        }
    });
}
