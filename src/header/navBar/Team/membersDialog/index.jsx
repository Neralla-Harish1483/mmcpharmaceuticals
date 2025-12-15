export default function MemberDialog({ member, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white max-w-3xl w-full rounded-2xl p-8 relative overflow-y-auto max-h-[90vh]">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-48 h-48 object-cover rounded-2xl shadow-lg"
          />

          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            {member.name}
          </h2>

          {member.title && (
            <p className="text-gray-600 mt-1">
              {member.title}
            </p>
          )}
        </div>

        {/* Description */}
        {member.description && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Description
            </h3>
            <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {member.description}
            </p>
          </div>
        )}

        {/* Experience */}
        {member.experience && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Experience
            </h3>
            <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {member.experience}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
