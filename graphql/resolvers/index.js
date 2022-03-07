const resolvers={
    Query:{
        artists:()=>([
            {
                name:"Sam",
                popularity:95,
                type:"Artist",
                id:"abc123"
            },
            {
                name:"YO",
                popularity:100,
                type:"Artist2",
                id:"abc123"
            }
        ])
    }
};

export default resolvers;