const AllTypes = [
    {
        "name": "normal",
        "colour": "#a4acaf",
        "visible": true,
        "immunes": [
            "ghost"
        ],
        "weaknesses": [
            "rock",
            "steel"
        ],
        "strengths": []
    },
    {
        "name": "fire",
        "colour": "#fd7d24",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "water",
            "rock",
            "dragon"
        ],
        "strengths": [
            "grass",
            "ice",
            "bug",
            "steel"
        ]
    },
    {
        "name": "water",
        "colour": "#4592c4",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "water",
            "grass",
            "dragon"
        ],
        "strengths": [
            "fire",
            "ground",
            "rock"
        ]
    },
    {
        "name": "electric",
        "colour": "#eed535",
        "visible": true,
        "immunes": [
            "ground"
        ],
        "weaknesses": [
            "electric",
            "grass",
            "dragon"
        ],
        "strengths": [
            "water",
            "flying"
        ]
    },
    {
        "name": "grass",
        "colour": "#9bcc50",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "grass",
            "poison",
            "flying",
            "bug",
            "dragon",
            "steel"
        ],
        "strengths": [
            "water",
            "ground",
            "rock"
        ]
    },
    {
        "name": "ice",
        "colour": "#51c4e7",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "water",
            "ice",
            "steel"
        ],
        "strengths": [
            "grass",
            "ground",
            "flying",
            "dragon"
        ]
    },
    {
        "name": "fighting",
        "colour": "",
        "visible": true,
        "immunes": [
            "ghost"
        ],
        "weaknesses": [
            "poison",
            "flying",
            "psychic",
            "bug",
            "fairy"
        ],
        "strengths": [
            "normal",
            "ice",
            "rock",
            "dark",
            "steel"
        ]
    },
    {
        "name": "poison",
        "colour": "",
        "visible": true,
        "immunes": [
            "steel"
        ],
        "weaknesses": [
            "poison",
            "ground",
            "rock",
            "ghost"
        ],
        "strengths": [
            "grass",
            "fairy"
        ]
    },
    {
        "name": "ground",
        "colour": "",
        "visible": true,
        "immunes": [
            "flying"
        ],
        "weaknesses": [
            "grass",
            "bug"
        ],
        "strengths": [
            "fire",
            "electric",
            "poison",
            "rock",
            "steel"
        ]
    },
    {
        "name": "flying",
        "colour": "",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "electric",
            "rock",
            "steel"
        ],
        "strengths": [
            "grass",
            "fighting",
            "bug"
        ]
    },
    {
        "name": "psychic",
        "colour": "",
        "visible": true,
        "immunes": [
            "dark"
        ],
        "weaknesses": [
            "psychic",
            "steel"
        ],
        "strengths": [
            "fighting",
            "poison"
        ]
    },
    {
        "name": "bug",
        "colour": "",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "fighting",
            "poison",
            "flying",
            "ghost",
            "steel",
            "fairy"
        ],
        "strengths": [
            "grass",
            "psychic",
            "dark"
        ]
    },
    {
        "name": "rock",
        "colour": "",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fighting",
            "ground",
            "steel"
        ],
        "strengths": [
            "fire",
            "ice",
            "flying",
            "bug"
        ]
    },
    {
        "name": "ghost",
        "colour": "",
        "visible": true,
        "immunes": [
            "normal"
        ],
        "weaknesses": [
            "dark"
        ],
        "strengths": [
            "psychic",
            "ghost"
        ]
    },
    {
        "name": "dragon",
        "colour": "",
        "visible": true,
        "immunes": [
            "fairy"
        ],
        "weaknesses": [
            "steel"
        ],
        "strengths": [
            "dragon"
        ]
    },
    {
        "name": "dark",
        "colour": "",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fighting",
            "dark",
            "fairy"
        ],
        "strengths": [
            "psychic",
            "ghost"
        ]
    },
    {
        "name": "steel",
        "colour": "",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "water",
            "electric",
            "steel"
        ],
        "strengths": [
            "ice",
            "rock",
            "fairy"
        ]
    },
    {
        "name": "fairy",
        "colour": "",
        "visible": true,
        "immunes": [],
        "weaknesses": [
            "fire",
            "poison",
            "steel"
        ],
        "strengths": [
            "fighting",
            "dragon",
            "dark"
        ]
    }
]

export default AllTypes