// source: 
// http://www.atpworldtour.com/Share/Event-Draws.aspx?EventId=410&Year=2013

var tree_structure = {
    chart: {
        container: "#OrganiseChart6",
        levelSeparation:    20,
        siblingSeparation:  15,
        subTeeSeparation:   15,
        rootOrientation: "EAST",

        node: {
            HTMLclass: "tennis-draw",
            drawLineThrough: true
        },
        connectors: {
            type: "step",
            style: {
                "stroke-width": 2,
                "stroke": "#ccc"
            }
        }
    },
    
    nodeStructure: {
        text: {
            name: {val: "Djokovic, Novak", href: "http://www.atpworldtour.com/Tennis/Players/Top-Players/Novak-Djokovic.aspx"}
        },
        HTMLclass: "winner",
        children: [
            {
                text: {
                    name: "Djokovic, Novak",
                    desc: "4-6, 6-2, 6-2"
                },
                children: [
                    {
                        text: {
                            name: "Djokovic, Novak",
                            desc: "4-6, 6-1, 6-4"
                        },
                        children: [
                            {
                                text: {
                                    name: "Djokovic, Novak",
                                    desc: "4-6, 6-1, 6-4"
                                },
                                children: [
                                    {
                                        text: { 
                                            name: "Djokovic, Novak",
                                            title: 1
                                        },
                                        image: "/campeonato-php/content/flags/srb.jpg",
                                        HTMLclass: "first-draw",

                                    },
                                    {
                                        text: { 
                                            name: "Bye",
                                            title: 2
                                        },
                                        HTMLclass: "first-draw bye"
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "Youzhny, Mikhail",
                                    desc: "6-4, 6-0"
                                },
                                children: [
                                    {
                                        text: { 
                                            name: "Youzhny, Mikhail",
                                            title: 3
                                        },
                                        image: "/campeonato-php/content/flags/rus.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: { 
                                            name: "Gimeno-Traver, Daniel",
                                            title: 4
                                        },
                                        image: "/campeonato-php/content/flags/esp.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: {
                            name: "Monaco, Juan",
                            desc: "6-0, 3-6, 6-3"
                        },
                        children: [
                            {
                                text: {
                                    name: "Gulbis, Ernests",
                                    desc: "4-6, 6-2, 6-3"
                                },
                                children: [
                                    {
                                        text: {
                                         name: "Gulbis, Ernests",
                                         title: 5
                                     },
                                        image: "/campeonato-php/content/flags/lat.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: { 
                                            name: "Isner, John",
                                            title: 6
                                        },
                                        image: "/campeonato-php/content/flags/usa.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "Monaco, Juan",
                                    desc: "6-4, 6-0"
                                },
                                children: [
                                    {
                                        text: { 
                                            name: "Klizan, Martin",
                                            title: 7
                                        },
                                        image: "/campeonato-php/content/flags/slo.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: { 
                                            name: "Monaco, Juan",
                                            title: 8
                                        },
                                        image: "/campeonato-php/content/flags/arg.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                text: {
                    name: "Nieminen, Jarkko",
                    desc: "6-3, 1-6, 7-6(3)"
                },
                children: [
                    {
                        text: {
                            name: "Nieminen, Jarkko",
                            desc: "4-6, 6-1, 6-4"
                        },
                        children: [
                            {
                                text: {
                                    name: "Raonic, Milos",
                                    desc: "6-1, 6-4"
                                },
                                children: [
                                    {
                                        text: { 
                                            name: "Raonic, Milos",
                                            title: 9
                                        },
                                        image: "/campeonato-php/content/flags/can.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: { 
                                            name: "Benneteau, Julien",
                                            title: 10
                                        },
                                        image: "/campeonato-php/content/flags/fra.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "Nieminen, Jarkko",
                                    desc: "6-1, 6-2"
                                },
                                children: [
                                    {
                                        text: { 
                                            name: "Nieminen, Jarkko",
                                            title: 11
                                        },
                                        image: "/campeonato-php/content/flags/fin.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: { 
                                            name: "Troicki, Viktor",
                                            title: 12
                                        },
                                        image: "/campeonato-php/content/flags/srb.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: {
                            name: "Del Potro, Juan Martin",
                            desc: "6-2, 6-4"
                        },
                        children: [
                            {
                                text: {
                                    name: "Dolgopolov, Alexandr",
                                    desc: "4-6, 6-2, 6-3"
                                },
                                children: [
                                    {
                                        text: { 
                                            name: "Dolgopolov, Alexandr",
                                            title: 13
                                        },
                                        image: "/campeonato-php/content/flags/ukr.jpg",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: {
                                            name: "Tomic, Bernard",
                                            title: 14
                                        },
                                        image: "/campeonato-php/content/flags/aus.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "Del Potro, Juan Martin",
                                    desc: "6-4, 6-0"
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Bye",
                                            title: 15
                                        },
                                        HTMLclass: "first-draw bye"
                                    },
                                    {
                                        text: {
                                            name: "Del Potro, Juan Martin",
                                            title: 16
                                        },
                                        image: "/campeonato-php/content/flags/arg.jpg",
                                        HTMLclass: "first-draw"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

new Treant( tree_structure );