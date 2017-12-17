< !DOCTYPE html >
    <
    html lang = "eng" >

    <
    head >
    <
    title > Tic Tac Toe < /title> <
script src = "https://code.jquery.com/jquery-3.2.1.slim.min.js" > < /script> <
style type = "text/css" >
    body table {
        border - collapse: collapse;
        width: 150 px;
        margin: 10 px;
    }

body table td {
    width: 50 px;
    height: 50 px;
    border: 1 px solid #555;
        cursor: pointer;
    }
    </style>
    
</head>

<body>
    <h1>Tic Tac Toe</h1>
    <button title= "Start new game!"
    id = "start" > Play < /button> <
    div id = "playground" > < /div> <
    p id = "result" / >
    <
    script type = "text/javascript" >
    $(document).ready(function() {
        var cells;

        function refresh() {
            $("#playground").remove("table");
            var table = $("<table>")
            var tr;
            $.each(cells, function(i) {
                if (!(i % 3) || !tr) {
                    tr = $("<tr>");
                };
                var td = $("<td>");
                td.attr("id", "cell_" + i);
                td.html(cells[i]);
                td.click(function() {
                    $("#result").text("You've clicked on cell number " + $(this).attr("id").split("_")[1] + ".");
                })
                table.append(tr.append(td));
            });
            $("#playground").append(table);
        }

        $("#start").click(function() {
            cells = ["", "", "", "", "", "", "", "", ""];
            refresh();
        })

    }) <
    /script> < /
    body >

    <
    /html>