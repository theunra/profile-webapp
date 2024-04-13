import Head from 'next/head';
import WorkPage from '../../components/work-page/WorkPage';
import smartcoffee_hbanner from '../../public/smartcoffee_hbanner.jpeg';
import smartcoffee_1 from '../../public/smartcoffee_1.png';
import smartcoffee_2 from '../../public/smartcoffee_2.png';
import smartcoffee_3 from '../../public/smartcoffee_3.png';

export default function SmartCoffee() {
  const projectDescriptions = {
    desc : "A project that aims to conduct research in making automatic coffee bean roasters based on Computer Vision, E-Nose and E-Ear.",
    roles : [
              {
                name: "Hardware Programmer", 
                works: [
                  "Design and create heater control system using ESP32 as data processor and controller.", 
                  "Create a coffee bean maturity detection system using E-Nose.",
                ],
              },
              {
                name: "Software Programmer", 
                works: [
                  "Design and create dashboard monitoring and data acquisition system for E-Nose and coffee bean maturity detection system.", 
                ],
              },
            ]
  }
  return (
    <>
      <Head>
          <title>Smart Coffee</title>
      </Head>
      {WorkPage("Smart Coffee Roaster", projectDescriptions, smartcoffee_hbanner, [smartcoffee_1, smartcoffee_2, smartcoffee_3])}
    </>
  );
}