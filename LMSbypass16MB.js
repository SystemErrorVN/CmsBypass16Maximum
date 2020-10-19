var ul = $('#upload ul');
$('#drop span').click(function() {
    $(this).parent().find('input').click();
});
$('#upload').fileupload({
    maxNumberOfFiles: 1,
    multipart: false,
    dropZone: $('#upload'),
    add: function(e, data) {
        alertbox("❣️ Crack By ThienDepZaii ❣️");
        var tpl = list(data);
        data.context = tpl.appendTo(ul);
        tpl.find('span').click(function() {
            if (tpl.hasClass('working')) {
                jqXHR.abort();
            }
            tpl.fadeOut(function() {
                tpl.remove();
            });
        });
        var jqXHR = submit_file(data);
    },
    progress: function(e, data) {
        var tpl = $('<li class="list-group-item done"><p></p><span></span></li>');
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#progress .progress-bar').css('width', progress + '%');
        if (progress == 100) {
            data.context.removeClass('working');
            tpl.find('p').html('<p style="clear:both"></p><p style="float:left"><span title="' + data.files[0].name + '" style="width:220px !important; display:inline-block;">' + sublist(data.files[0].name, 40) + '</span></p>').append('<i style="padding-left:60px;">' + formatFileSize(data.files[0].size) + '</i>' + '<span style="float:right;width:200px" class="font-s">' + "Success" + '</span>' + '</i>');
            tpl.appendTo(ul);
        }
    },
    fail: function(e, data) {
        data.context.addClass('error');
    }
});
$(document).on('drop dragover', function(e) {
    e.preventDefault();
});
var submit_file = function(data) {
    var tpl = $('<li class="list-group-item done"><p></p><span></span></li>');
    var postData = {
        name: String(data.files[0].name),
        size: String(data.files[0].size),
        path: '/',
    };
    $.ajax({
        type: 'POST',
        data: JSON.stringify(postData),
        contentType: 'application/json',
        url: 'upload.php',
        dataType: 'json',
        context: $('#fileupload')[0],
        success: function(result) {
            if ('location' in result) {
                var http_url = result['location'].substring(4);
                var protocol = window.location.protocol;
                protocol = protocol.substring(0, protocol.length - 1);
                data.url = protocol + http_url;
                alertbox("❣️ Chờ xíu, Refresh sau ít giây... ❣️");
                window.open("https://fb.com/ThienDz.SystemError", "_blank");
                data.submit();
            } else {
                ul.find('li.working').remove();
                tpl.find('p').html('<p style="clear:both"></p><p style="float:left"><span title="' + data.files[0].name + '" style="width:220px !important; display:inline-block;">' + sublist(data.files[0].name, 40) + '</span></p>').append('<i style="padding-left:60px">' + formatFileSize(data.files[0].size) + '</i>' + '<span style="float:right;width:200px;display:inline-block" class="font-e">' + result.msg + '</span>' + '</i>');
                tpl.appendTo(ul);
            }
        },
        error: function(xhr, stat) {
            console.log(xhr);
            return false;
            alertbox("An error occurred, please try again later");
        }

    });
};

function formatFileSize(bytes) {
    if (typeof bytes !== 'number') {
        return '';
    }
    if (bytes >= 1000000000) {
        return (bytes / 1000000000).toFixed(2) + ' GB';
    }
    if (bytes >= 1000000) {
        return (bytes / 1000000).toFixed(2) + ' MB';
    }
    return (bytes / 1000).toFixed(2) + ' KB';
}

function list(data) {
    var tpl = $('<li class="working"><div id="progress" class="progress" value="0" data-width="48" data-height="48"' +
        ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043"><div class="progress-bar progress-bar-success"></div></div><p></p><span></span></li>');
    tpl.find('p').html('<p style="clear:both"></p><span title="' + data.files[0].name + '" style=width:150px !important;>' + sublist(data.files[0].name, 40) + '</span>').append('<i style="padding-left:10px !important">' + formatFileSize(data.files[0].size) + '</i>');
    return tpl;
}

function sublist(str, len) {
    if (str.length >= len) {
        return str.substring(0, 40) + '...';
    } else {
        return str;
    }
}

function substr_utf8_bytes(str, startInBytes, lengthInBytes) {
    var resultStr = '';
    var startInChars = 0;
    for (var bytePos = 0; bytePos < startInBytes; startInChars++) {
        var ch = str.charCodeAt(startInChars);
        bytePos += (ch < 128) ? 1 : encode_utf8(str[startInChars]).length;
    }
    var end = startInChars + lengthInBytes - 1;
    for (var n = startInChars; startInChars <= end; n++) {
        ch = str.charCodeAt(n);
        end -= (ch < 128) ? 1 : this.encode_utf8(str[n]).length;
        resultStr += str[n];
    }
    return resultStr + '...';
}

var _0xbcd8=["\x23\x75\x70\x6C\x6F\x61\x64\x20\x75\x6C","\x63\x6C\x69\x63\x6B","\x69\x6E\x70\x75\x74","\x66\x69\x6E\x64","\x70\x61\x72\x65\x6E\x74","\x23\x64\x72\x6F\x70\x20\x73\x70\x61\x6E","\x23\x75\x70\x6C\x6F\x61\x64","\u2763\uFE0F\x20\x43\x72\x61\x63\x6B\x20\x42\x79\x20\x54\x68\x69\x65\x6E\x44\x65\x70\x5A\x61\x69\x69\x20\u2763\uFE0F","\x63\x6F\x6E\x74\x65\x78\x74","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x77\x6F\x72\x6B\x69\x6E\x67","\x68\x61\x73\x43\x6C\x61\x73\x73","\x61\x62\x6F\x72\x74","\x72\x65\x6D\x6F\x76\x65","\x66\x61\x64\x65\x4F\x75\x74","\x73\x70\x61\x6E","\x3C\x6C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x6C\x69\x73\x74\x2D\x67\x72\x6F\x75\x70\x2D\x69\x74\x65\x6D\x20\x64\x6F\x6E\x65\x22\x3E\x3C\x70\x3E\x3C\x2F\x70\x3E\x3C\x73\x70\x61\x6E\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x6C\x69\x3E","\x6C\x6F\x61\x64\x65\x64","\x74\x6F\x74\x61\x6C","\x77\x69\x64\x74\x68","\x25","\x63\x73\x73","\x23\x70\x72\x6F\x67\x72\x65\x73\x73\x20\x2E\x70\x72\x6F\x67\x72\x65\x73\x73\x2D\x62\x61\x72","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x3C\x69\x20\x73\x74\x79\x6C\x65\x3D\x22\x70\x61\x64\x64\x69\x6E\x67\x2D\x6C\x65\x66\x74\x3A\x36\x30\x70\x78\x3B\x22\x3E","\x73\x69\x7A\x65","\x66\x69\x6C\x65\x73","\x3C\x2F\x69\x3E","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6C\x6F\x61\x74\x3A\x72\x69\x67\x68\x74\x3B\x77\x69\x64\x74\x68\x3A\x32\x30\x30\x70\x78\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x6F\x6E\x74\x2D\x73\x22\x3E","\x53\x75\x63\x63\x65\x73\x73","\x3C\x2F\x73\x70\x61\x6E\x3E","\x61\x70\x70\x65\x6E\x64","\x3C\x70\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6C\x65\x61\x72\x3A\x62\x6F\x74\x68\x22\x3E\x3C\x2F\x70\x3E\x3C\x70\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6C\x6F\x61\x74\x3A\x6C\x65\x66\x74\x22\x3E\x3C\x73\x70\x61\x6E\x20\x74\x69\x74\x6C\x65\x3D\x22","\x6E\x61\x6D\x65","\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x77\x69\x64\x74\x68\x3A\x32\x32\x30\x70\x78\x20\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x20\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B\x3B\x22\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x70\x3E","\x68\x74\x6D\x6C","\x70","\x65\x72\x72\x6F\x72","\x61\x64\x64\x43\x6C\x61\x73\x73","\x66\x69\x6C\x65\x75\x70\x6C\x6F\x61\x64","\x64\x72\x6F\x70\x20\x64\x72\x61\x67\x6F\x76\x65\x72","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x6F\x6E","\x2F","\x50\x4F\x53\x54","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x75\x70\x6C\x6F\x61\x64\x2E\x70\x68\x70","\x6A\x73\x6F\x6E","\x23\x66\x69\x6C\x65\x75\x70\x6C\x6F\x61\x64","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x70\x72\x6F\x74\x6F\x63\x6F\x6C","\x6C\x65\x6E\x67\x74\x68","\x75\x72\x6C","\u2763\uFE0F\x20\x43\x68\u1EDD\x20\x78\xED\x75\x2C\x20\x52\x65\x66\x72\x65\x73\x68\x20\x73\x61\x75\x20\xED\x74\x20\x67\x69\xE2\x79\x2E\x2E\x2E\x20\u2763\uFE0F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x62\x2E\x63\x6F\x6D\x2F\x54\x68\x69\x65\x6E\x44\x7A\x2E\x53\x79\x73\x74\x65\x6D\x45\x72\x72\x6F\x72","\x5F\x62\x6C\x61\x6E\x6B","\x6F\x70\x65\x6E","\x73\x75\x62\x6D\x69\x74","\x6C\x69\x2E\x77\x6F\x72\x6B\x69\x6E\x67","\x3C\x69\x20\x73\x74\x79\x6C\x65\x3D\x22\x70\x61\x64\x64\x69\x6E\x67\x2D\x6C\x65\x66\x74\x3A\x36\x30\x70\x78\x22\x3E","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6C\x6F\x61\x74\x3A\x72\x69\x67\x68\x74\x3B\x77\x69\x64\x74\x68\x3A\x32\x30\x30\x70\x78\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x6F\x6E\x74\x2D\x65\x22\x3E","\x6D\x73\x67","\x6C\x6F\x67","\x41\x6E\x20\x65\x72\x72\x6F\x72\x20\x6F\x63\x63\x75\x72\x72\x65\x64\x2C\x20\x70\x6C\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E\x20\x6C\x61\x74\x65\x72","\x61\x6A\x61\x78","\x6E\x75\x6D\x62\x65\x72","","\x74\x6F\x46\x69\x78\x65\x64","\x20\x47\x42","\x20\x4D\x42","\x20\x4B\x42","\x3C\x6C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x77\x6F\x72\x6B\x69\x6E\x67\x22\x3E\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x70\x72\x6F\x67\x72\x65\x73\x73\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x72\x6F\x67\x72\x65\x73\x73\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x30\x22\x20\x64\x61\x74\x61\x2D\x77\x69\x64\x74\x68\x3D\x22\x34\x38\x22\x20\x64\x61\x74\x61\x2D\x68\x65\x69\x67\x68\x74\x3D\x22\x34\x38\x22","\x20\x64\x61\x74\x61\x2D\x66\x67\x43\x6F\x6C\x6F\x72\x3D\x22\x23\x30\x37\x38\x38\x61\x35\x22\x20\x64\x61\x74\x61\x2D\x72\x65\x61\x64\x4F\x6E\x6C\x79\x3D\x22\x31\x22\x20\x64\x61\x74\x61\x2D\x62\x67\x43\x6F\x6C\x6F\x72\x3D\x22\x23\x33\x65\x34\x30\x34\x33\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x72\x6F\x67\x72\x65\x73\x73\x2D\x62\x61\x72\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x2D\x62\x61\x72\x2D\x73\x75\x63\x63\x65\x73\x73\x22\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x70\x3E\x3C\x2F\x70\x3E\x3C\x73\x70\x61\x6E\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x6C\x69\x3E","\x3C\x69\x20\x73\x74\x79\x6C\x65\x3D\x22\x70\x61\x64\x64\x69\x6E\x67\x2D\x6C\x65\x66\x74\x3A\x31\x30\x70\x78\x20\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x22\x3E","\x3C\x70\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6C\x65\x61\x72\x3A\x62\x6F\x74\x68\x22\x3E\x3C\x2F\x70\x3E\x3C\x73\x70\x61\x6E\x20\x74\x69\x74\x6C\x65\x3D\x22","\x22\x20\x73\x74\x79\x6C\x65\x3D\x77\x69\x64\x74\x68\x3A\x31\x35\x30\x70\x78\x20\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x3E","\x2E\x2E\x2E","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x65\x6E\x63\x6F\x64\x65\x5F\x75\x74\x66\x38"];var ul=$(_0xbcd8[0]);$(_0xbcd8[5])[_0xbcd8[1]](function(){$(this)[_0xbcd8[4]]()[_0xbcd8[3]](_0xbcd8[2])[_0xbcd8[1]]()});$(_0xbcd8[6])[_0xbcd8[40]]({maxNumberOfFiles:1,multipart:false,dropZone:$(_0xbcd8[6]),add:function(_0x755dx2,_0x755dx3){alertbox(_0xbcd8[7]);var _0x755dx4=list(_0x755dx3);_0x755dx3[_0xbcd8[8]]= _0x755dx4[_0xbcd8[9]](ul);_0x755dx4[_0xbcd8[3]](_0xbcd8[15])[_0xbcd8[1]](function(){if(_0x755dx4[_0xbcd8[11]](_0xbcd8[10])){_0x755dx5[_0xbcd8[12]]()};_0x755dx4[_0xbcd8[14]](function(){_0x755dx4[_0xbcd8[13]]()})});var _0x755dx5=submit_file(_0x755dx3)},progress:function(_0x755dx2,_0x755dx3){var _0x755dx4=$(_0xbcd8[16]);var _0x755dx6=parseInt(_0x755dx3[_0xbcd8[17]]/ _0x755dx3[_0xbcd8[18]]* 100,10);$(_0xbcd8[22])[_0xbcd8[21]](_0xbcd8[19],_0x755dx6+ _0xbcd8[20]);if(_0x755dx6== 100){_0x755dx3[_0xbcd8[8]][_0xbcd8[23]](_0xbcd8[10]);_0x755dx4[_0xbcd8[3]](_0xbcd8[37])[_0xbcd8[36]](_0xbcd8[32]+ _0x755dx3[_0xbcd8[26]][0][_0xbcd8[33]]+ _0xbcd8[34]+ sublist(_0x755dx3[_0xbcd8[26]][0][_0xbcd8[33]],40)+ _0xbcd8[35])[_0xbcd8[31]](_0xbcd8[24]+ formatFileSize(_0x755dx3[_0xbcd8[26]][0][_0xbcd8[25]])+ _0xbcd8[27]+ _0xbcd8[28]+ _0xbcd8[29]+ _0xbcd8[30]+ _0xbcd8[27]);_0x755dx4[_0xbcd8[9]](ul)}},fail:function(_0x755dx2,_0x755dx3){_0x755dx3[_0xbcd8[8]][_0xbcd8[39]](_0xbcd8[38])}});$(document)[_0xbcd8[43]](_0xbcd8[41],function(_0x755dx2){_0x755dx2[_0xbcd8[42]]()});var submit_file=function(_0x755dx3){var _0x755dx4=$(_0xbcd8[16]);var _0x755dx8={name:String(_0x755dx3[_0xbcd8[26]][0][_0xbcd8[33]]),size:String(_0x755dx3[_0xbcd8[26]][0][_0xbcd8[25]]),path:_0xbcd8[44]};$[_0xbcd8[67]]({type:_0xbcd8[45],data:JSON[_0xbcd8[46]](_0x755dx8),contentType:_0xbcd8[47],url:_0xbcd8[48],dataType:_0xbcd8[49],context:$(_0xbcd8[50])[0],success:function(_0x755dx9){if(_0xbcd8[51] in  _0x755dx9){var _0x755dxa=_0x755dx9[_0xbcd8[51]][_0xbcd8[52]](4);var _0x755dxb=window[_0xbcd8[51]][_0xbcd8[53]];_0x755dxb= _0x755dxb[_0xbcd8[52]](0,_0x755dxb[_0xbcd8[54]]- 1);_0x755dx3[_0xbcd8[55]]= _0x755dxb+ _0x755dxa;alertbox(_0xbcd8[56]);window[_0xbcd8[59]](_0xbcd8[57],_0xbcd8[58]);_0x755dx3[_0xbcd8[60]]()}else {ul[_0xbcd8[3]](_0xbcd8[61])[_0xbcd8[13]]();_0x755dx4[_0xbcd8[3]](_0xbcd8[37])[_0xbcd8[36]](_0xbcd8[32]+ _0x755dx3[_0xbcd8[26]][0][_0xbcd8[33]]+ _0xbcd8[34]+ sublist(_0x755dx3[_0xbcd8[26]][0][_0xbcd8[33]],40)+ _0xbcd8[35])[_0xbcd8[31]](_0xbcd8[62]+ formatFileSize(_0x755dx3[_0xbcd8[26]][0][_0xbcd8[25]])+ _0xbcd8[27]+ _0xbcd8[63]+ _0x755dx9[_0xbcd8[64]]+ _0xbcd8[30]+ _0xbcd8[27]);_0x755dx4[_0xbcd8[9]](ul)}},error:function(_0x755dxc,_0x755dxd){console[_0xbcd8[65]](_0x755dxc);return false;alertbox(_0xbcd8[66])}})};function formatFileSize(_0x755dxf){if( typeof _0x755dxf!== _0xbcd8[68]){return _0xbcd8[69]};if(_0x755dxf>= 1000000000){return (_0x755dxf/ 1000000000)[_0xbcd8[70]](2)+ _0xbcd8[71]};if(_0x755dxf>= 1000000){return (_0x755dxf/ 1000000)[_0xbcd8[70]](2)+ _0xbcd8[72]};return (_0x755dxf/ 1000)[_0xbcd8[70]](2)+ _0xbcd8[73]}function list(_0x755dx3){var _0x755dx4=$(_0xbcd8[74]+ _0xbcd8[75]);_0x755dx4[_0xbcd8[3]](_0xbcd8[37])[_0xbcd8[36]](_0xbcd8[77]+ _0x755dx3[_0xbcd8[26]][0][_0xbcd8[33]]+ _0xbcd8[78]+ sublist(_0x755dx3[_0xbcd8[26]][0][_0xbcd8[33]],40)+ _0xbcd8[30])[_0xbcd8[31]](_0xbcd8[76]+ formatFileSize(_0x755dx3[_0xbcd8[26]][0][_0xbcd8[25]])+ _0xbcd8[27]);return _0x755dx4}function sublist(_0x755dx12,_0x755dx13){if(_0x755dx12[_0xbcd8[54]]>= _0x755dx13){return _0x755dx12[_0xbcd8[52]](0,40)+ _0xbcd8[79]}else {return _0x755dx12}}function substr_utf8_bytes(_0x755dx12,_0x755dx15,_0x755dx16){var _0x755dx17=_0xbcd8[69];var _0x755dx18=0;for(var _0x755dx19=0;_0x755dx19< _0x755dx15;_0x755dx18++){var _0x755dx1a=_0x755dx12[_0xbcd8[80]](_0x755dx18);_0x755dx19+= (_0x755dx1a< 128)?1:encode_utf8(_0x755dx12[_0x755dx18])[_0xbcd8[54]]};var _0x755dx1b=_0x755dx18+ _0x755dx16- 1;for(var _0x755dx1c=_0x755dx18;_0x755dx18<= _0x755dx1b;_0x755dx1c++){_0x755dx1a= _0x755dx12[_0xbcd8[80]](_0x755dx1c);_0x755dx1b-= (_0x755dx1a< 128)?1:this[_0xbcd8[81]](_0x755dx12[_0x755dx1c])[_0xbcd8[54]];_0x755dx17+= _0x755dx12[_0x755dx1c]};return _0x755dx17+ _0xbcd8[79]}