function renderTable(array) {
    for (i = 0; i < array.length; i++) {
        var tableId = array[i][0];
        var tableStatus = array[i][1];
        var tableThreshold = array[i][2];

        if (tableStatus == 0) {
            document.getElementById("imageid").src="../../images/green.png";
        } else {
            document.getElementById("imageid").src="../template/red.png";
        }
    }
}
