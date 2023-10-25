import React, { Suspense } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import data from "./data/tabs.json";
import { GeneralLayout } from "./components/layouts/Layout";
import { LoadingSpinner } from "./components/LoadingSpinner";

type ComponentType = React.ComponentType;

interface ComponentData {
  [key: string]: ComponentType;
}

function App() {
  const components: ComponentData = {};

  data.forEach((item) => {
    components[item.id] = React.lazy(
      () => import(/* webpackChunkName: "my-chunk" */ `./${item.path}`),
    );
  });

  return (
    <GeneralLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {data.map((item) => {
            const Component = components[item.id];
            return (
              <Route key={item.id} path={item.id} element={<Component />} />
            );
          })}
          <Route path="/" element={<Navigate to="/dummyList" />} />
        </Routes>
      </Suspense>
    </GeneralLayout>
  );
}

export default App;
