import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';

function About() {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                <div className="about-title">
                    <span>About Us</span>
                    <div className="seperator" />
                </div>
                <div className="about-text">
                    <span>
                        Les droits de l'homme (parfois écrits « droits de l'Homme »), également appelés droits humains
                        ou droits de la personne (par exemple dans un contexte de communication gouvernementale au Canada)
                        , sont un concept à la fois philosophique, juridique et politique, selon lequel tout être humain 
                        possède des droits universels, inaliénables, quel que soit le droit positif (droit en vigueur) ou d'autres
                        facteurs locaux tels que l'ethnie, la nationalité ou la religion.
                        <br />
                        <br />
                        Selon ce concept, tout être humain — en tant que tel et indépendamment de sa condition sociale — a des droits 
                        « inhérents à sa personne, inaliénables et sacrés », et donc opposables en toutes circonstances à la société et
                        au pouvoir. Ainsi, le concept de droits de l'homme est par définition universaliste et égalitaire, incompatible
                        avec les systèmes et les régimes fondés sur la supériorité en dignité d'une caste, d'une race, d'un peuple, d'une
                        classe ou d'un quelconque groupe social ou individu par rapport à un autre ; incompatible tout autant avec l'idée
                        que la construction d'une société meilleure justifie l'élimination ou l'oppression de ceux qui sont censés faire 
                        obstacle à cette édification.
                        <br />
                        <br />
                        Les droits de l'homme, prérogatives dont sont titulaires les individus, sont généralement reconnus dans les pays démocratiques
                        par la loi, par des normes de valeur constitutionnelle ou par des conventions internationales, afin que leur respect soit assuré
                        par tous, y compris par l'État. L'existence, la validité et le contenu des droits de l'homme sont un sujet permanent de débat en
                        philosophie et en science politique. 
                    </span>
                </div>
            </div>
        </div>
    );
}

export default About;