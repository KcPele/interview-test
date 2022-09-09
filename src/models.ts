




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

export interface IData {
    graph_data: IGraphData,
    top_locations: {
        source: string;
        count: number;
        percent: number;
    }[],
    top_sources: {
        country: string;
        count: number;
        percent: number;
    }[]

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
}[]