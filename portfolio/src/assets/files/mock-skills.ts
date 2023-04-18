import { Habilidad } from "src/app/entities/habilidad";


export const HABILIDADES: Habilidad[] = [
    {
        "id": 1,
        "nombre":"Informatica",
        "conocimientos": [
            {"id": 1,"nombre":"Conceptos", "nivel": "80"},
            {"id": 2,"nombre":"Manejo de redes", "nivel": "90"},
        ],
    },
    {
        "id": 2,
        "nombre":"Software",
        "conocimientos": [
            {"id": 1,"nombre":"VSC", "nivel": "30"},
            {"id": 2,"nombre":"NetBeans", "nivel": "20"},
        ],
    },
    {
        "id": 3,
        "nombre":"Hardware",
        "conocimientos": [
            {"id": 1,"nombre":"Conceptos", "nivel": "70"},
            {"id": 2,"nombre":"Componentes", "nivel": "80"},
        ],
    },
    {
        "id": 4,
        "nombre":"Programacion",
        "conocimientos": [
            {"id": 1,"nombre":"C++", "nivel": "85"},
            {"id": 2,"nombre":"Haskell", "nivel": "80"},
            {"id": 3,"nombre":"Prolog", "nivel": "50"},
            {"id": 4,"nombre":"Java", "nivel": "65"},
            {"id": 5,"nombre":"HTML", "nivel": "75"},
            {"id": 6,"nombre":"CSS", "nivel": "50"},
            {"id": 7,"nombre":"Angular", "nivel": "40"},
            {"id": 8,"nombre":"JavaScript", "nivel": "50"},
            {"id": 9,"nombre":"TypeScript", "nivel": "50"},
            {"id": 10,"nombre":"Bootstrap", "nivel": "80"},
        ],
    },
]