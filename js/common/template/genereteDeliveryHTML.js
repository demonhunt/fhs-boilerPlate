import PriceFormat from "../PriceFormat";



export default function generate(listOrder,shipperName,select) {
    var Header = `<h2 style="text-align: center;">${select =='receive'?"BẢNG KÊ THU TIỀN":"BẢNG KÊ XUẤT HÀNG"}</h2>


        <table class = "maintable">
            <caption>&nbsp;</caption><tbody>
        <tr>
        <th style="width: 2%;">&nbsp;STT</th>
        <th style="width: 10%;">&nbsp;M&atilde; đơn h&agrave;ng</th>
        <th style="width: 13%;">&nbsp;&nbsp;Kh&aacute;ch h&agrave;ng</th>
        <th style="width: 7%;">SĐT</th>
        <th style="width: 25%;">Địa chỉ&nbsp;</th>
        <th style="width: 8%;">Số CT/ HĐ</th>
        <th style="width: 10%;">Ng&agrave;y xuất HĐ</th>
        <th style="width: 10%;">&nbsp;Th&agrave;nh tiền</th>
        <th style="width: 10%;">&nbsp;Phương thức thanh to&aacute;n</th>
        <th style="width: 15%;">&nbsp;K&iacute; nhận</th>

        </tr>`;
  var Body = ``;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  var Footer = select == "receive"?
  ` </tbody>
    </table>


    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
    <table style="height: 5px;" width="100%">
    <tbody>
    <tr style="height: 73.8438px;">
    <td class="footer" style="width: 50%; height: 73.8438px;">
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    <p style="text-align: center;">B&Ecirc;N GIAO</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    <p style="text-align: center;">${shipperName}</p>

    </td>
    <td class="footer" style="width: 50%; text-align: right; height: 73.8438px;">
    <p style="text-align: center;">&nbsp;Ng&agrave;y ${dd}/${mm}/${yyyy}</p>
    <p style="text-align: center;">&nbsp; B&Ecirc;N NHẬN</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    </td>
    </tr>
    </tbody>
    </table>
    <style>
        p {
            font-size: 75%
        }

        th {
            height: 50px
        }
        td {
            height: 40px
        }
        
        table.maintable,
        th,
        td.maintable {
            border: 1px solid black;
            border-collapse: collapse;
        }

        td.footer {
            border: 0px;
            border-collapse: collapse;
        }
    </style>`
  :
  `
    </tbody>
    </table>


    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
    <table style="height: 5px;" width="100%">
    <tbody>
    <tr style="height: 73.8438px;">
    <td class="footer" style="width: 50%; height: 73.8438px;">
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    <p style="text-align: center;">&nbsp; &nbsp;B&Ecirc;N GIAO&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>

    </td>
    <td class="footer" style="width: 50%; text-align: right; height: 73.8438px;">
    <p style="text-align: center;">&nbsp;Ng&agrave;y ${dd}/${mm}/${yyyy}</p>
    <p style="text-align: center;">&nbsp; B&Ecirc;N NHẬN</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    <p style="text-align: center;">${shipperName}&nbsp;</p>
    </td>
    </tr>
    </tbody>
    </table>
    <style>
        p {
            font-size: 75%
        }

        th {
            height: 50px
        }
        td {
            height: 40px
        }
        
        table.maintable,
        th,
        td.maintable {
            border: 1px solid black;
            border-collapse: collapse;
        }

        td.footer {
            border: 0px;
            border-collapse: collapse;
        }
    </style>`;

  for (let i in listOrder) {
    let order = listOrder[i];
    let index = 1 + parseInt(i);
    let total = PriceFormat.formatString(order.totalFull);
    let html = `<tr style="height: 10px;">
    <td class="maintable"  style="width: 2%; ">
        <p>&nbsp;${index}</p>
    </td>
    <td class="maintable"  style="width: 10%; ">
        <p>&nbsp;${order.suborder_id}</p>
    </td>
    <td class="maintable"  style="width: 13%; ">
        <p>${order.customerName}</p>
    </td>
    <td class="maintable"  style="width: 7%;  text-align: center;">
        <p>&nbsp;${order.telephone}</p>
    </td>
    <td class="maintable"  style="width: 25%;  text-align: left;">
        <p>&nbsp;${order.address}</p>
    </td>
    <td class="maintable"  style="width: 8%;  text-align: center;">
    <p>${order.invoice_number}</p>
    </td>
    <td class="maintable"  style="width: 10%;  text-align: center;">
    <p>${order.invoice_timestamp.split(" ")[0]}</p>
    </td>
    <td class="maintable"  style="width: 10%;  text-align: center;">
        <p>${total}</p>
    </td>
    <td class="maintable"  style="width: 10%; text-align: center;">
        <p>&nbsp;${order.method}</p>
    </td><td class="maintable"  style="width: 15%; text-align: center;">
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
</td>
    </tr>`;
    Body += html;
  }
  return Header + Body + Footer;
}
