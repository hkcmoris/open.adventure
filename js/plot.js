class PlotPointType {
    static INTRODUCTION = 0;
    static RISING_ACTION = 1;
    static CLIMAX = 2;
    static FALLING_ACTION = 3;
    static RESOLUTION = 4;
}

class PlotPoint {
    constructor(type, description) {
        this.type = type;
        this.description = description;
    }
}

class Plot {
    constructor() {
        this.plotPoints = [];
        
        this.plotPoints.push(new PlotPoint(PlotPointType.INTRODUCTION, "The story begins with the main character in a normal situation."));
        this.plotPoints.push(new PlotPoint(PlotPointType.RISING_ACTION, "The main character is introduced to a problem."));
        this.plotPoints.push(new PlotPoint(PlotPointType.CLIMAX, "The main character faces the problem head on."));
        this.plotPoints.push(new PlotPoint(PlotPointType.FALLING_ACTION, "The main character is faced with a new problem."));
        this.plotPoints.push(new PlotPoint(PlotPointType.RESOLUTION, "The main character resolves the problem."));
    }
}