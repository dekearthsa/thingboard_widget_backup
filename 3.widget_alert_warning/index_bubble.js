self.onInit = function() {
    
    self.ctx.datasourceTitleCells = [];
    self.ctx.valueCells = [];
    self.ctx.labelCells = [];
    
    for (var i=0; i < self.ctx.datasources.length; i++) {
        var tbDatasource = self.ctx.datasources[i];

        var datasourceId = 'tbDatasource' + i;
        self.ctx.$container.append(
            "<div id='" + datasourceId +
            "' class='tbDatasource-container'></div>"
        );

        var datasourceContainer = $('#' + datasourceId,
            self.ctx.$container);

        datasourceContainer.append(
            "<div class='tbDatasource-title'>" +
            tbDatasource.name + "</div>"
        );
        
        var datasourceTitleCell = $('.tbDatasource-title', datasourceContainer);
        self.ctx.datasourceTitleCells.push(datasourceTitleCell);
        
        var tableId = 'table' + i;
        datasourceContainer.append(
            "<table id='" + tableId +
            "' class='tbDatasource-table'><col width='30%'><col width='70%'></table>"
        );
        var table = $('#' + tableId, self.ctx.$container);

        for (var a = 0; a < tbDatasource.dataKeys.length; a++) {
            var dataKey = tbDatasource.dataKeys[a];
            var labelCellId = 'labelCell' + a;
            var cellId = 'cell' + a;
            table.append("<tr><td id='" + labelCellId + "'>" + dataKey.label +
                "</td><td id='" + cellId +
                "'></td></tr>");
            var labelCell = $('#' + labelCellId, table);
            self.ctx.labelCells.push(labelCell);
            var valueCell = $('#' + cellId, table);
            self.ctx.valueCells.push(valueCell);
        }
    }    
    
    self.onResize();
}

self.onDataUpdated = function() {
    for (var i = 0; i < self.ctx.valueCells.length; i++) {
        var cellData = self.ctx.data[i];
        if (cellData && cellData.data && cellData.data.length > 0) {
            var tvPair = cellData.data[cellData.data.length -
                1];
            var value = tvPair[1];
            var textValue;
            //toDo -> + IsNumber
            
            if (isNumber(value)) {
                var decimals = self.ctx.decimals;
                var units = self.ctx.units;
                if (cellData.dataKey.decimals || cellData.dataKey.decimals === 0) {
                    decimals = cellData.dataKey.decimals;
                }
                if (cellData.dataKey.units) {
                    units = cellData.dataKey.units;
                }
                txtValue = self.ctx.utils.formatValue(value, decimals, units, true);
            } else {
                txtValue = value;
            }
            self.ctx.valueCells[i].html(txtValue);
        }
    }
    
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}

self.onResize = function() {
    var datasourceTitleFontSize = self.ctx.height/8;
    if (self.ctx.width/self.ctx.height <= 1.5) {
        datasourceTitleFontSize = self.ctx.width/12;
    }
    datasourceTitleFontSize = Math.min(datasourceTitleFontSize, 20);
    for (var i = 0; i < self.ctx.datasourceTitleCells.length; i++) {
        self.ctx.datasourceTitleCells[i].css('font-size', datasourceTitleFontSize+'px');
    }
    var valueFontSize = self.ctx.height/9;
    var labelFontSize = self.ctx.height/9;
    if (self.ctx.width/self.ctx.height <= 1.5) {
        valueFontSize = self.ctx.width/15;
        labelFontSize = self.ctx.width/15;
    }
    valueFontSize = Math.min(valueFontSize, 18);
    labelFontSize = Math.min(labelFontSize, 18);

    for (i = 0; i < self.ctx.valueCells; i++) {
        self.ctx.valueCells[i].css('font-size', valueFontSize+'px');
        self.ctx.valueCells[i].css('height', valueFontSize*2.5+'px');
        self.ctx.valueCells[i].css('padding', '0px ' + valueFontSize + 'px');
        self.ctx.labelCells[i].css('font-size', labelFontSize+'px');
        self.ctx.labelCells[i].css('height', labelFontSize*2.5+'px');
        self.ctx.labelCells[i].css('padding', '0px ' + labelFontSize + 'px');
    }    
}

self.onDestroy = function() {
}
