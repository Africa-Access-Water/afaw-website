import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";
import {teamMembers} from "../data/teamData";

const Team = () => {

  useEffect(() => {
    document.title = "Our Team - AfAW";
  }, []);

  // Filter members by type and sort by ID in ascending order
  const boardMembers = teamMembers
    .filter(member => member.type === "Board Member")
    .sort((a, b) => a.id - b.id);
    
  const teamMembersList = teamMembers
    .filter(member => member.type === "Team Member")
    .sort((a, b) => a.id - b.id);

  const volunteersList = teamMembers
    .filter(member => member.type === "Volunteer")
    .sort((a, b) => a.id - b.id);

  return (
    <Layout title="Our Team - Africa Access Water">
      <Header title="Our Team" current="team" />

      {/* Our Board Members */}
      <div className="container-xxl mt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Our Board Members</h1>
          </div>
            <div className="row g-4 mx-2 mx-md-0 mx-lg-1">
              {boardMembers.map((member, index) => {
                return (
                  <TeamCard 
                    key={member.id || index} 
                    full_name={member.full_name}
                    image_url= {member.image_url || "/img/placeholders/profile.jpg"} 
                    position={member.position}
                    role={member.bio}
                    alt={member.full_name}
                  />
                );
              })}
            </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="container-xxl mt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Meet Our Team</h1>
            <p>The team members battling rural poverty</p>
          </div>
            <div className="row g-4 text-center mx-2 mx-md-0 mx-lg-1">
              {teamMembersList.map((member, index) => (
                <TeamCard 
                  key={member.id || index} 
                  {...member} 
                  role= ""
                  image_url= {member.image_url || "/img/placeholders/profile.jpg"} 
                  alt={member.full_name}
                />
              ))}
            </div>
        </div>
      </div>

      {/* Volunteers */}
      <div className="container-xxl mt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Volunteers Team</h1>
          </div>
            <div className="row g-4 text-center mx-2 mx-md-0 mx-lg-1">
              {volunteersList.map((member, index) => (
                <TeamCard 
                  key={member.id || index} 
                  {...member} 
                  role= ""
                  image_url= {member.image_url || "/img/placeholders/profile.jpg"} 
                  alt={member.full_name}
                />
              ))}
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default Team;
