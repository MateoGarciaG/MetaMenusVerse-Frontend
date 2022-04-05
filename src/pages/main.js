import "./style.scss";
import { Footer } from "/components/footer/footer";
import { Header } from "/components/header/header";
import { AddForm } from "/components/addForm/addForm";
import { EditForm } from "/components/editForm/editForm";
import { Main } from "/components/main/main";

import "bootstrap/dist/css/bootstrap.min.css";
import { GroupCard } from "/components/groupCard/groupCard";
import { Login } from "/components/login/login";


Header();
Main();

Login();

AddForm();
GroupCard();
EditForm();
Footer();

