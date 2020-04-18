import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Login from '~/pages/Login/index';

import Dashboard from '~/pages/Dashboard/index';
import EncomendaCadastro from '~/pages/Dashboard/Cadastro/index';
import VisualizarEncomenda from '~/pages/Dashboard/Visualizar/index';
import OrderUpdate from '~/pages/Dashboard/Editar/index';
import DeliverymanUpdate from '~/pages/Deliverymen/Editar/index';
import DeliverymenList from '~/pages/Deliverymen/index';
import DeliverymenCadastro from '~/pages/Deliverymen/Cadastro/index';
import RecipientsList from '~/pages/Recipients/index';
import RecipientsCadastro from '~/pages/Recipients/Cadastro/index';
import RecipientsUpdate from '~/pages/Recipients/Editar/index';
import DeliveryProblemsList from '~/pages/DeliveryProblems/index';
import ProblemItem from '~/pages/DeliveryProblems/Visualizar/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/orders" exact component={Dashboard} isPrivate />
      <Route path="/orders/cadastro" component={EncomendaCadastro} isPrivate />
      <Route
        path="/orders/:id/editar"
        exact
        component={OrderUpdate}
        isPrivate
      />
      <Route
        path="/orders/:id"
        exact
        component={VisualizarEncomenda}
        isPrivate
      />

      <Route path="/deliveryman" exact component={DeliverymenList} isPrivate />
      <Route
        path="/deliveryman/cadastro"
        component={DeliverymenCadastro}
        isPrivate
      />
      <Route
        path="/deliveryman/:id"
        exact
        component={DeliverymanUpdate}
        isPrivate
      />

      <Route path="/recipients" exact component={RecipientsList} isPrivate />
      <Route
        path="/recipients/cadastro"
        component={RecipientsCadastro}
        isPrivate
      />
      <Route path="/recipients/:id" component={RecipientsUpdate} isPrivate />

      <Route
        path="/problems"
        exact
        component={DeliveryProblemsList}
        isPrivate
      />
      <Route path="/problems/:id" exact component={ProblemItem} isPrivate />
    </Switch>
  );
}
