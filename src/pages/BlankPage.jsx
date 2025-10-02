import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header"; 

function BlankPage() {
  return (
    
    <Layout title="Blank Page - Africa Access Water">
      <Header title="Blank" current="blank" />
      <div className="container-xxl py-5 mt-5">
        <div className="container text-center">
          <h1 className="display-1">Blank</h1>
          <p className="mb-4">This page is intentionally left blank.</p>
        </div>
      </div>
    </Layout>
  );
}

export default BlankPage;
