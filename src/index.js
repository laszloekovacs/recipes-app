import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";

const data = [
    {
        "name": "Baked Salmon",
        "ingredients": [
            {"name": "Salmon", "amount": 1, "measurement": "lb"},
            {"name": "Pine nuts", "amount": 1, "measurement": "cup"},
            {"name": "Butter Letuce", "amount": 2, "measurement": "med"},
            {"name": "Olive Oil", "amount": 0.5, "measurement": "cup"}
        ],
        "steps": [
            "preheat oven",
            "Spread olive oil around glass",
            "add yellow squash and place in oven",
            "Bake for 15 minutes",
            "Remove from oven"
        ]
    },
    {
        "name": "fish tacos",
        "ingredients": [
            {"name": "Cheese", "amount": 2,"measurement": "lb"},
            {"name": "Pine nuts", "amount": 1, "measurement": "cup"},
            {"name": "Butter Letuce", "amount": 2, "measurement": "med"},
            {"name": "Olive Oil", "amount": 0.5, "measurement": "cup"}
        ],
        "steps": [
            "cook the fish on the grill",
            "Place the fish on the tortillas",
            "Top them with lettuce, tomatoes"
        ]
    }
]


ReactDOM.render(<Menu recipes={data} />, document.getElementById("root"));