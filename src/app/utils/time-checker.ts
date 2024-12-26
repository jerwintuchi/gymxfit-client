type DayTimeRange = {
    start: number,
    end: number,
}

type DayTime = {
    morning: DayTimeRange;
    noon: DayTimeRange;
    afternoon: DayTimeRange;
    evening: DayTimeRange;
    night: DayTimeRange;
  };

  const timeRanges: DayTime = {
    morning: { start: 0, end: 11 },
    noon: { start: 12, end: 12 }, // Noon is just 12:00
    afternoon: { start: 13, end: 17 },
    evening: { start: 18, end: 20 },
    night: { start: 21, end: 23 },
  };


export const checkDayTime = (hour : number): string => {
    switch (true) {
        case (hour >= timeRanges.morning.start && hour <= timeRanges.morning.end):
            return 'morning'
        case (hour >= timeRanges.noon.start && hour <= timeRanges.noon.end):
            return 'noon'
        case (hour >= timeRanges.afternoon.start && hour <= timeRanges.afternoon.end):
            return 'afternoon'
        case (hour >= timeRanges.evening.start && hour <= timeRanges.evening.end):
            return 'evening'
        case (hour >= timeRanges.night.start && hour <= timeRanges.night.end):
            return 'night'
        default:
            return "Hour is Unknown. Maybe you live on another planet."
    }
}

