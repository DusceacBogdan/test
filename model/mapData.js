const Images = [
    { image: require("../assets/banners/food-banner1.jpg") },
    { image: require("../assets/banners/food-banner2.jpg") },
    { image: require("../assets/banners/food-banner3.jpg") },
    { image: require("../assets/banners/food-banner4.jpg") },
];

export const markers = [
    {
        coordinate: {
            latitude: 46.762805,
            longitude: 23.574303,
        },
        title: "Glass and Aluminium Recycle Center",
        description: "This is the best food place",
        image: Images[0].image,
        rating: 4,
        reviews: 99,
        items: "Glass, Aluminium"
    },
    {
        coordinate: {
            latitude: 46.778318,
            longitude: 23.609913,
        },
        title: "Plastic Recycle Center",
        description: "This is the second best food place",
        image: Images[1].image,
        rating: 5,
        reviews: 102,
        items: "Plastic"
    },
    {
        coordinate: {
            latitude: 46.772306,
            longitude: 23.581058,
        },
        title: "Electronics Recycle Center",
        description: "This is the third best food place",
        image: Images[2].image,
        rating: 3,
        reviews: 220,
        items: "Electronics"
    },
    {
        coordinate: {
            latitude: 46.766346,
            longitude: 23.591239,
        },
        title: "Paper and Cardboard Recycle Center",
        description: "This is the fourth best food place",
        image: Images[3].image,
        rating: 4,
        reviews: 48,
        items: "Paper, Cardboard"
    },
    {
        coordinate: {
            latitude: 46.763532,
            longitude: 23.569983,
        },
        title: "Second Plastic Recycle Center",
        description: "This is the fifth best food place",
        image: Images[3].image,
        rating: 4,
        reviews: 178,
        items: "Plastic"
    },
];

export const mapDarkStyle = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#212121",
            },
        ],
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#757575",
            },
        ],
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#212121",
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
            {
                color: "#757575",
            },
        ],
    },
    {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9e9e9e",
            },
        ],
    },
    {
        featureType: "administrative.land_parcel",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#bdbdbd",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#757575",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#181818",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#616161",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#1b1b1b",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#2c2c2c",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#8a8a8a",
            },
        ],
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#373737",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#3c3c3c",
            },
        ],
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
            {
                color: "#4e4e4e",
            },
        ],
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#616161",
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#757575",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#000000",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#3d3d3d",
            },
        ],
    },
];

export const mapStandardStyle = [
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
];
