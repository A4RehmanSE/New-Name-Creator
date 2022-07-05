
jQuery(document).ready(function($) {
    $("#btn_combine").click(function() {
        combineNames()
    });
    $("input").keypress(function(event) {
        if (event.which == 13) {
            combineNames()
        }
    });
    $("#btn_clear").click(function() {
        $(".su-box input").val("");
        $("#results").empty();
        $("#1stInput").focus()
    });
    $(".su-box input").keyup(function() {
        this.value = this.value.replace(/[^a-z]/gi, '')
    });
    $("#1stInput").focus();

    function combineNames() {
        $("#results").html("");
        var dataArray = [];
        $(".su-box input").each(function() {
            var inputVal = $(this).val();
            inputVal = inputVal.toLowerCase();
            if (inputVal !== "") dataArray.push(inputVal)
        });
        for (var i = 0; i < dataArray.length; i++) {
            for (var j = 0; j < dataArray.length; j++) {
                if (i !== j && dataArray[i] !== dataArray[j]) {
                    getValues(dataArray[i], dataArray[j]);
                    globalVal = dataArray[i] + " & " + dataArray[j]
                }
            }
        }
    }

    function getValues(name1, name2) {
        finalResults = [];
        for (var i = 1; i <= name1.length; i++) {
            for (var j = 0; j < name2.length; j++) {
                finalResults.push(name1.substr(0, i) + name2.substr(j))
            }
        }
        appendToResults(finalResults, name1, name2)
    }

    function appendToResults(data, name1, name2) {
        var namecombinations = "";
        $("#results").append("<div class='su-row'><H3>" + name1 + " & " + name2 + "</H3></div>")
        $(data).each(function() {
            namecombinations = namecombinations.concat(this + " , ")
        })
        $("#results").append("<div class='su-row'>" + namecombinations + "</div>")
    }
});