import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDetails from './WebDetails';
import { useState } from 'react';

const Category = () => {
    const [category, setCategory] = useState("Web Developent");

    return (
        <div>
            <h2 className="text-center text-2xl font-bold mx-11 mt-10 "> Category </h2>
            <Tabs className="text-center mt-5 ">
                <TabList >
                    <Tab onClick={() => setCategory("Web Developent")}>Web Developent</Tab>
                    <Tab onClick={() => setCategory("Graphics Design")}>Graphics Design</Tab>
                    <Tab onClick={() => setCategory("digital marketing")}>digital marketing</Tab>
                </TabList>
                <TabPanel>
                    <WebDetails category={category}></WebDetails>
                </TabPanel>
                <TabPanel>
                    <WebDetails category={category}></WebDetails>
                </TabPanel>
                <TabPanel>
                    <WebDetails category={category}></WebDetails>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Category;


{/* <h2 className="text-center text-2xl font-bold "> Category </h2> */ }
{/* <Tabs>
                <TabList className="text-center ">
                    <Tab>Web Developent</Tab>
                    <Tab>Graphics Design</Tab>
                    <Tab>digital marketing</Tab>
                </TabList>
                    <WebDetails>Web Developent</WebDetails>
                <TabPanel>
                    <WebDetails>Graphics Design</WebDetails>
                </TabPanel>
                <TabPanel>
                    <WebDetails>digital marketing</WebDetails>
                </TabPanel>
            </Tabs> */}


