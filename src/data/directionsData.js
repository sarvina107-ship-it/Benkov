import Cinema1 from '../assets/directions/image.png'
import Cinema2 from '../assets/directions/image1.png'
import Cinema3 from '../assets/directions/image2.png'
import Cinema4 from '../assets/directions/image3.png'
import Lacquer1 from '../assets/directions/image4.png'
import Lacquer2 from '../assets/directions/image5.png'
import Lacquer3 from '../assets/directions/image6.png'
import Lacquer4 from '../assets/directions/image7.png'
import Graphic1 from '../assets/directions/image8.png'
import Graphic2 from '../assets/directions/image9.png'
import Graphic3 from '../assets/directions/image10.png'
import Graphic4 from '../assets/directions/image11.png'
import Easel1 from '../assets/directions/image12.png'
import Easel2 from '../assets/directions/image13.png'
import Easel3 from '../assets/directions/image14.png'
import Easel4 from '../assets/directions/image15.png'
import Monumental1 from '../assets/directions/image16.png'
import Monumental2 from '../assets/directions/image17.png'
import Monumental3 from '../assets/directions/image18.png'
import Monumental4 from '../assets/directions/image19.png'
import Set1 from '../assets/directions/image20.png'
import Set2 from '../assets/directions/image21.png'
import Set3 from '../assets/directions/image22.png'
import Set4 from '../assets/directions/image23.png'
import Props1 from '../assets/directions/image24.png'
import Props2 from '../assets/directions/image25.png'
import Props3 from '../assets/directions/image26.png'
import Props4 from '../assets/directions/image27.png'
import Wood1 from '../assets/directions/image28.png'
import Wood2 from '../assets/directions/image29.png'
import Wood3 from '../assets/directions/image30.png'
import Wood4 from '../assets/directions/image31.png'
import Ganch1 from '../assets/directions/image32.png'
import Ganch2 from '../assets/directions/image33.png'
import Ganch3 from '../assets/directions/image34.png'
import Ganch4 from '../assets/directions/image35.png'
import Costume1 from '../assets/directions/image36.png'
import Costume2 from '../assets/directions/image37.png'
import Costume3 from '../assets/directions/image38.png'
import Costume4 from '../assets/directions/image39.png'
import Sculpture1 from '../assets/directions/image40.png'
import Sculpture2 from '../assets/directions/image41.png'
import Sculpture3 from '../assets/directions/image42.png'
import Sculpture4 from '../assets/directions/image43.png'

export const directionsCategories = [
    {
        category: "cinema",
        items: ["cinema-artist"]
    },
    {
        category: "graphics",
        items: ["lacquer-miniature", "graphic-artist"]
    },
    {
        category: "painting",
        items: ["easel-painting", "monumental-painting"]
    },
    {
        category: "theater",
        items: ["theatrical-set-designer", "theatrical-props"]
    },
    {
        category: "carving",
        items: ["wood-carving", "ganch-carving", "monumental-decorative"]
    },
    {
        category: "designer",
        items: ["costume-designer", "interior-designer", "computer-graphics-designer"]
    },
    {
        category: "sculpture",
        items: ["artistic-ceramics", "sculpture", "artist-restorer"]
    }
];

export const directionsData = {
    "cinema-artist": {
        image: Cinema4,
        images: [Cinema1, Cinema2, Cinema3, Cinema4]
    },
    "lacquer-miniature": {
        image: Lacquer1,
        images: [Lacquer1, Lacquer2, Lacquer3, Lacquer4]
    },
    "graphic-artist": {
        image: Graphic1,
        images: [Graphic1, Graphic2, Graphic3, Graphic4]
    },
    "easel-painting": {
        image: Easel4,
        images: [Easel1, Easel2, Easel3, Easel4]
    },
    "monumental-painting": {
        image: Monumental3,
        images: [Monumental1, Monumental3, Monumental4, Monumental2]
    },
    "theatrical-set-designer": {
        image: Set2,
        images: [Set1, Set2, Set3, Set4]
    },
    "theatrical-props": {
        image: Props1,
        images: [Props1, Props3, Props4, Props2]
    },
    "wood-carving": {
        image: Wood1,
        images: [Wood2, Wood1, Wood3, Wood4]
    },
    "ganch-carving": {
        image: Ganch1,
        images: [ Ganch4,Ganch1, Ganch3, Ganch2]
    },
    "monumental-decorative": {
        image: "/images/directions/monumental-decorative.jpg",
        images: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"]
    },
    "costume-designer": {
        image: Costume1,
        images: [Costume1, Costume2, Costume3, Costume4]
    },
    "interior-designer": {
        image: "/images/directions/interior.jpg",
        images: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"]
    },
    "computer-graphics-designer": {
        image: "/images/directions/digital.jpg",
        images: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"]
    },
    "artistic-ceramics": {
        image: "/images/directions/ceramics.jpg",
        images: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"]
    },
    "sculpture": {
        image: Sculpture1,
        images: [Sculpture1, Sculpture2, Sculpture3, Sculpture4]
    },
    "artist-restorer": {
        image: "/images/directions/restoration.jpg",
        images: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"]
    }
};