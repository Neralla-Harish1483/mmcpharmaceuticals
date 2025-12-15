import career from "../career/career.png";
import careerBg from "../career/logo.png";
import { Careerdata } from "../../../data/careerData";
export default function Career() {

  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${careerBg})` }}
    >
      <div className="bg-white/90">

        <div className="text-center py-14">
          <h2 className="text-3xl font-bold tracking-wide text-gray-800">
            CAREERS
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex justify-center">
            <img
              src={career}
              alt="Career"
              className="rounded-2xl shadow-xl max-h-[420px] object-contain"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              MMC is an organization interested in the welfare of all employees &
              is constantly introducing various programs for Employee Welfare.
            </h2>

            <div>
              <h3 className="text-lg font-bold text-red-700 mb-2">
                Values
              </h3>
              <p className="text-gray-600">{Careerdata.Values}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-700 mb-2">
                At MMC..
              </h3>
              <p className="text-gray-600">{Careerdata.At}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-700 mb-2">
                Why MMC?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {Careerdata.Why.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm font-medium text-gray-500">
              {Careerdata.footer}
            </p>
          </div>
        </div>
        
        <div className="bg-gray-900 text-white py-10 text-center">
          <h2 className="text-lg mb-2 text-red-500">
            If you are fascinated to join our team, send your CV to
          </h2>
          <a
            href={`mailto:${Careerdata.recruiter}`}
            className="text-blue-400 font-semibold hover:underline"
          >
            {Careerdata.recruiter}
          </a>
        </div>

      </div>
    </div>
  );
}

