function showdata(){
    var name = document.getElementById("txtname");
    var fname = document.getElementById("txtfname");
    var id = document.getElementById("txtid");
    var mths = document.getElementById("txtmths");
    var phy = document.getElementById("txtphy");
    var urdu = document.getElementById("txturdu");
    var total =
    parseInt(mths.value)+ parseInt(phy.value)+ parseInt(urdu.value);
    var pern = (total/300)*100;
    document.write(
        "<h1>" +name.value + "S/o"+ fname.value +"</h1>" );
        document.write(
        "having student id of " + id.value + ""); 
        document.write(
            '<table border="2px"><tr> <th>Math</th> <th>Physics</th> <th>Urdu</th> </tr> <tr> <td>' +
                mths.value +
                "</td> <td>" +
                    phy.value +
                    "</td> <td>" +
                        urdu.value +
                        "</td> </tr> </table>"
        );
        document.write(
            "<h3> Percentage is : <i>" + parseInt(pern) + "</h3> </i>"

        );
        
}