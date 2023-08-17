
import { BASE, RGBA } from "../colors"


export const CHART_LINE_WIDTH = 1.5
export const CHART_MARKER_RADIUS = 1

export class LineChartModel {
    constructor( title, color ) {

        this.type = 'line'
        
        this.data = { 
            labels: [ ], 
            datasets: [ ] 
        }
        
        this.options = {
            color: color,
            animation: false, 
            responsive: true, 
            maintainAspectRatio: false,
            parsing: false, 
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    bottom: 10,
                }
            },
            interaction: { 
                mode: "time", 
                intersection: false 
            },
            scales: { 
                x: LineChartXScale 
            },
            plugins: { 
                title: { 
                    text: title, 
                    fontSize: 16,
                    position: "bottom",
                    display: false 
                },
                legend: {
                    position: "top",
                    align: "center",
                    display: false,
                    labels: {
                        textAlign: "center",
                        boxHeight: 20,
                        boxWidth: 20,
                        borderRadius: 10,
                        useBorderRadius: true,
                        padding: 20,
                    },
                },
                decimation: { 
                    algorithm: "lttb",
                    enabled: true 
                },
                zoom: {
                    zoom: {
                        mode: "xy",
                        scaleMode: "xy",
                        wheel: { enabled: true, speed: 0.05, },
                        drag: { enabled: true },
                    },
                    pan: { enabled: false }
                },
        //         // tooltip: { position: "fixed" }
            }
        }
    }

    pushPoint( point, set = [ ], scale, limit, scale_margin ) {

        let x_min = set.pushSample( limit, point )
        let filt = set.data.filter( x => x.x >= x_min )
        let Ys = filt.map( p => p.y )
        let min = Math.min( ...Ys ) // console.log( min )
        let max = Math.max( ...Ys ) // console.log( max )
        if ( max - min > 0 ) {
            scale.min = min - ( ( max - min ) * scale_margin )
            scale.max = max +  ( ( max - min ) * scale_margin )
        }    
        this.options.scales.x.min = x_min
        this.options.scales.x.max = point.x
    }
}

export let LineChartXScale = {
    type: 'time',
    time: {
        // unit: 'day',
        displayFormats: {
            day: "MMM-d HH:mm",
            hour: 'MMM-d HH:mm',
            minute: 'HH:mm:ss',
            second: 'HH:mm:ss',
            millisecond: "HH:mm:ss.SSS",
        }
    },
    grid: { 
        color: RGBA( BASE.LIGHT, 0.2 ),
        display: true
    },
    position: 'bottom',
    border: {
        display: true,
        color: RGBA( BASE.LIGHT, 0.2 ),
        width: 1,
    },
    title: {
        display: false,
        font: {
            size: 15,
        },
        padding: {
            top: 13,
            bottom: 13,
        },
        color: RGBA( BASE.LIGHT, 0.7 ),
        text: "Time",
    },
    ticks: {
        autoSkip: true,
        autoSkipPadding: 50,
        maxRotation: 0,
        color: RGBA( BASE.LIGHT, 0.7 ),
        padding: 15,
    }
}

export class LineChartDataSet {
    data = [ ]
    label = "Unknown"
    yAxisID = "y"
    lineWidth = 1.5
    lineColor = RGBA( BASE.LIGHT, 0.3 )
    markerRadius = 1
    markerColor = RGBA( BASE.LIGHT, 0.7 )
    backgroundColor =  RGBA( BASE.LIGHT, 0.7 )
    constructor( 
        data = [ ],
        label = "Unknown",
        yAxisID = "y",
        lineWidth = 1.5,
        lineColor = RGBA( BASE.LIGHT, 0.3 ),
        markerRadius = 1,
        markerColor = RGBA( BASE.LIGHT, 0.7 )
    ) {
        this.data = data
        this.label = label
        this.hidden = false
        this.xAxisID = "x" // xAxisID
        this.yAxisID = yAxisID
        this.borderWidth = lineWidth
        this.borderColor = lineColor
        this.radius = markerRadius
        this.backgroundColor = markerColor
    }
    
    pushSample( limit, point = { x: 0, y: 0.0 } ) {
        if ( this.data[0].x == 0 )  { this.data.shift( ) }
        let len = this.data.push( point ) 
        
        if ( limit > 0 ) {
            for ( len; len > limit; len-- ) {
                this.data.shift( )
            }
        }
        return this.data[0].x
    }
}
export class XYPoint { 
    constructor( 
        point = { x: 0, y: 0.0 } 
    ) { 
        this.x = point.x, 
        this.y = point.y 
    } 
}
export class LineChartScale {
    constructor( 
        title, 
        weight, 
        min,
        max,
        position,
        color,
        gridColor,
        showGrid,
    ) {
        this.type = "linear"
        this.min = min
        this.max = max
        this.position = position
        this.weight = weight,
        this.display = true
        this.border = {
            display: true,
            color: gridColor,
            width: 1,
        }
        this.title = {
            display: true,
            align: "end",
            font: {
                size: 15,
            },
            padding: {
                top: 13,
                bottom: 3,
            },
            color: color,
            text: title,
        }
        this.ticks = { 
            color: color ,
            callback: function( value ) {
                return value.toFixed( 1 )
            }
        }
        this.grid = { 
            display: showGrid,
            color: gridColor,
        }
    }
}

