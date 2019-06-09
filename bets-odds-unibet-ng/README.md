# Guide pratique : Lignes de commande CLI
## Génération d'un composant Angular dans un sous répertoire, attaché au module principal app.module
ng generate component subdirectory/my-component --module=app.module
## Génération d'un module avec configuration de routing
ng generate module my-module --routing

Pour plus d'informations : https://angular.io/cli/generate


# TSLint rule flags

/* tslint:disable */ - Disable all rules for the rest of the file
/* tslint:enable */ - Enable all rules for the rest of the file
/* tslint:disable:rule1 rule2 rule3... */ - Disable the listed rules for the rest of the file
/* tslint:enable:rule1 rule2 rule3... */ - Enable the listed rules for the rest of the file
// tslint:disable-next-line - Disables all rules for the following line
someCode(); // tslint:disable-line - Disables all rules for the current line
// tslint:disable-next-line:rule1 rule2 rule3... - Disables the listed rules for the next line

# JQWidgets

## Charts : 

https://www.jqwidgets.com/angular/angular-chart/#https://www.jqwidgets.com/angular/angular-chart/angular-chart-candlestickchart.htm

## Angular Router

https://angular.io/guide/router
https://stackblitz.com/angular/yogmnknoxmv?file=src%2Fapp%2Fapp-routing.module.ts

## Lazy Loading, Preloading et resolve data dans les routes dans Angular

https://alligator.io/angular/lazy-loading/


https://alligator.io/angular/preloading/


https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html


## Fonctionnement du lazy loading

1) Création d'un module avec routing : ng g module bets --routing
2) Ajout de 3 composants dans le module bets : ng g c bets/hxa, ng g c bets/homeaway, ng g c bets/ou
Note : Ne pas importer les modules lazy loaded dans app.module sinon ils seront chargés (eager loaded)

# Material Design

1) CDK Components : https://material.angular.io/components/categories
2) Getting started : https://material.angular.io/guide/getting-started
3) Design components : https://www.sitepoint.com/angular-material-design-components/

## Fonctionnement de Angular Router
On peut activer des logs dans Angular Router en mettant la propriété enableTracing à true dans app-routing.module
RouterModule.forRoot(routes, {enableTracing: true })
On peut réaliser des actions personnalisées sur chacun des évènements déclenchés lorsqu'on transite d'une page à une autre.

## Introduction à AppShell (améliorer les performances de démarrage de l'application)

https://blog.angular-university.io/angular-app-shell/

## Protection des routes avec les Guards

https://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html

## Introduction à JWT

- https://blog.angular-university.io/angular-jwt/
- https://blog.angular-university.io/angular-jwt-authentication/

# Fonctionnement de la signature digitale JWT

## IN memory WEB API

https://www.techiediaries.com/angular-inmemory-web-api/

## SAML

https://github.com/slem1/saml-angular

https://spring.io/guides/gs/authenticating-ldap/

https://blog.codecentric.de/en/2019/03/secure-spring-boot-app-saml-keycloak/

https://github.com/thomasdarimont/spring-boot-security-saml-sample/tree/poc/keycloak-saml-idp

https://github.com/keycloak/keycloak-quickstarts


## Formations Angular 

- https://blog.angular-university.io/

- https://medium.com/@Carmichaelize/detecting-router-changes-with-angular-2-2f8c019788c3

- https://www.angularjswiki.com/angular/buttons-in-angular-using-material-design-mat-button-example/

## Ngx Translate

https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate

https://github.com/ngx-translate/core/issues/886

https://angular-2-training-book.rangle.io/handout/modules/shared-modules-di.html










