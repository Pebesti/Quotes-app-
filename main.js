import "./quote.css";
import LoveCounter from "./love-counter";
import Alpine from "alpinejs";
import * as fun from "everyday-fun";
import persist from "@alpinejs/persist";
import Quotes from "./quotes";

window.Alpine = Alpine;
Alpine.plugin(persist);

Alpine.data("loveCounter", LoveCounter);
Alpine.data("quoteApp", Quotes);

Alpine.start();
