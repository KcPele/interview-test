




export interface IProps {
    pieData: {
        country?: string | null,
        count: number,
        percent: number,
        source?:  string |  null
    }[],
    title: string,
    icons: string[]
    
    
}


export interface  IGraphData {
    views: {
        string: number;
    };
};


export interface  ITopSources {
    source: string;
    count: number;
    percent: number;
}[]
export interface  ITopLocations{
    country: string;
    count: number;
    percent: number;
}