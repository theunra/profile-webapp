import Head from 'next/head';
import WorkPage from '../../components/work-page/WorkPage';
import hbanner from '../../public/aeroponik_hbanner.png';
import aeroponik_1 from '../../public/aeroponik_1.jpeg';
import aeroponik_2 from '../../public/aeroponik_2.jpeg';
import aeroponik_3 from '../../public/aeroponik_3.png';

export default function Aeroponik() {
  const projectDescriptions = {
    desc : "A project that aims to create a system for IoT-based aeroponic.",
    roles : [
              {
                name: "Hardware and Software Programmer", 
                works: [
                  "Designing piping system controls and plant data processing.", 
                  "Design User interface in QT 5 and Raspbian.",
                  "Design and implement nutrition control and detection system in C++."
                ],
              },
            ]
  }
  return (
    <>
      <Head>
          <title>Aeroponik</title>
      </Head>
      {WorkPage("Aeroponik Project", projectDescriptions, hbanner, [aeroponik_1, aeroponik_2, aeroponik_3])}
    </>
  );
}