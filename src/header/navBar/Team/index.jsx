import { useState } from "react";
import { TeamMembers } from "../../../data/teamData";
import MemberDialog from "./membersDialog";
export default function Team() {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Leadership Team
      </h1>

      {TeamMembers.map((section, index) => (
        <div
          key={index}
          className="mb-14 border-b border-gray-200 pb-10"
        >
          {/* Section Heading */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() =>
              setActiveSection(activeSection === index ? null : index)
            }
          >
            <h2 className="text-2xl font-semibold text-blue-700">
              {section.heading}
            </h2>

            <span className="text-gray-500 text-xl">
              {activeSection === index ? "−" : "+"}
            </span>
          </div>

          {/* Members Grid */}
          {activeSection === index && (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {section.details.map((member, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedMember(member)}
                  className="bg-white rounded-2xl shadow-md p-4 text-center cursor-pointer
                             hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-36 h-36 object-cover rounded-xl mx-auto"
                  />

                  <h3 className="mt-4 font-semibold text-gray-800">
                    {member.name}
                  </h3>

                  {member.title && (
                    <p className="text-sm text-gray-500 mt-1">
                      {member.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Modal */}
      {selectedMember && (
        <MemberDialog
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}