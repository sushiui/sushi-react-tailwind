import Header from "../Header/Header";
import React, { useState } from "react";
import Layout from "./Layout";
import Sider from "../Sider/Sider";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Menu from "../Menu/Menu";
import Icon from "../Icon/Icon";

export const LayoutExample = () => {
  const navItems = [
    {
      label: "subnav 1",
      key: "subnav1",
      itemIcon: <Icon name="person_outline" />,
      items: [
        { label: "option 1", key: "option1", itemIcon: <></> },
        { label: "option 2", key: "option2", itemIcon: <></> },
        { label: "option 3", key: "option3", itemIcon: <></> },
        { label: "option 4", key: "option4", itemIcon: <></> },
      ],
    },
    {
      label: "subnav 2",
      key: "subnav2",
      itemIcon: <Icon name="computer" />,
      items: [
        { label: "option 5", key: "option5", itemIcon: <></> },
        { label: "option 6", key: "option6", itemIcon: <></> },
        { label: "option 7", key: "option7", itemIcon: <></> },
        { label: "option 8", key: "option8", itemIcon: <></> },
      ],
    },
    {
      label: "subnav 3",
      key: "subnav3",
      itemIcon: <Icon name="settings_overscan" />,
      items: [
        { label: "option 9", key: "option9", itemIcon: <></> },
        { label: "option 10", key: "option10", itemIcon: <></> },
        { label: "option 11", key: "option11", itemIcon: <></> },
        { label: "option 12", key: "option12", itemIcon: <></> },
      ],
    },
  ];
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "List", href: "/" }, { label: "App" }];
  return (
    <>
      <div className="flex flex-col gap-5 w-full border p-3">
        <Layout>
          <Header className="flex flex-auto bg-blue-300 items-center text-white justify-center border-b-0">Header</Header>
          <Content className="bg-blue-500 text-white p-10 flex flex-col items-center justify-center text-base">Content</Content>
          <Footer className="flex flex-row bg-blue-300 p-5 text-white items-center justify-center">Footer</Footer>
        </Layout>
        <Layout>
          <Header className="flex flex-auto bg-blue-300 items-center text-white justify-center border-b-0">Header</Header>
          <Layout>
            <Sider className="bg-blue-400 text-white p-10 flex flex-col items-center justify-center text-base">Sider</Sider>
            <Content className="bg-blue-500 text-white p-10 flex flex-col items-center justify-center text-base">Content</Content>
          </Layout>
          <Footer className="flex flex-row bg-blue-300 p-5 text-white items-center justify-center">Footer</Footer>
        </Layout>

        <Layout>
          <Header className="flex flex-auto bg-blue-300 items-center text-white justify-center border-b-0">Header</Header>
          <Layout>
            <Content className="bg-blue-500 text-white p-10 flex flex-col items-center justify-center text-base">Content</Content>
            <Sider className="bg-blue-400 text-white p-10 flex flex-col items-center justify-center text-base">Sider</Sider>
          </Layout>
          <Footer className="flex flex-row bg-blue-300 p-5 text-white items-center justify-center">Footer</Footer>
        </Layout>

        <Layout>
          <Sider className="bg-blue-400 text-white p-10 flex flex-col items-center justify-center text-base">Sider</Sider>
          <Layout>
            <Header className="flex flex-auto bg-blue-300 items-center text-white justify-center border-b-0">Header</Header>
            <Content className="bg-blue-500 text-white p-10 flex flex-col items-center justify-center text-base">Content</Content>
            <Footer className="flex flex-row bg-blue-300 p-5 text-white items-center justify-center">Footer</Footer>
          </Layout>
        </Layout>
      </div>
      <div className="flex flex-col w-full h-100px"></div>
      <div className="border p-3">
        <Layout>
          <Header className="bg-gray-600">
            <div className="text-white">Logo</div>
          </Header>
          <Content className="px-10 flex-col bg-gray-200">
            <Breadcrumb className="my-4" routes={breadcrumbs} />
            <div className="min-h-280px p-6 bg-white">Content</div>
          </Content>
          <Footer className="bg-gray-200 p-7 text-center">Sushi Design &copy; Created by Sushi Tailwindcss</Footer>
        </Layout>
      </div>
      <div className="flex flex-col w-full h-100px"></div>
      <div className="border p-3">
        <Layout>
          <Header className="bg-gray-600">
            <div className="text-white">Logo</div>
          </Header>
          <Layout>
            <Sider className="w-268px bg-gray-50">
              <Menu defaultOpenKeys={["subnav1"]} items={navItems}></Menu>
            </Sider>
            <Layout className="bg-gray-300 py-0 px-6 pb-6">
              <Breadcrumb className="my-4" routes={breadcrumbs} />
              <Content className="flex-col">
                <div className="min-h-280px bg-white p-6">Content</div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
      <div className="flex flex-col w-full h-100px"></div>
      <div className="border p-3">
        <Layout>
          <Header className="bg-gray-600">
            <div className="text-white">Logo</div>
          </Header>
          <Content className="px-5 py-0 flex-col bg-gray-300">
            <Breadcrumb className="my-4" routes={breadcrumbs} />
            <Layout className="px-2 py-4 bg-white">
              <Sider className="border-r-1px border-r-gray-200">
                <Menu defaultOpenKeys={["subnav1"]} items={navItems}></Menu>
              </Sider>
              <Content className="p-2">Content</Content>
            </Layout>
          </Content>
          <Footer className="bg-gray-200 p-7 text-center">Sushi Design &copy; Created by Sushi Tailwindcss</Footer>
        </Layout>
      </div>
    </>
  );
};

export const SiderExample = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (c: boolean) => {
    setCollapsed(c);
  };
  return (
    <Layout className="bg-gray-200">
      <Sider collapsible className="bg-indigo-900" collapsed={collapsed} onCollapse={onCollapse}>
        <div className="w-full p-3">
          <div className="bg-white h-30px"></div>
        </div>
        <Menu
          collapsed={collapsed}
          className="text-white"
          defaultOpenKeys={["subnav1", "user"]}
          items={[
            { label: "Option 1", key: "option1", itemIcon: <Icon name="pie_chart" /> },
            { label: "Option 2", key: "option2", itemIcon: <Icon name="desktop_windows" /> },
            {
              label: "User",
              key: "user",
              itemIcon: <Icon name="person_outline" />,
              children: [
                { label: "Tom", key: "tom" },
                { label: "Bill", key: "bill" },
                { label: "Alex", key: "alex" },
              ],
            },
          ]}
        ></Menu>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content className="flex-col px-6">
          <Breadcrumb routes={[{ label: "User", href: "/" }, { label: "Bill" }]} className="py-3"></Breadcrumb>
          <div className="p-6 bg-white h-300px">Content</div>
        </Content>
        <Footer className="p-7 text-center">Sushi Design &copy; Created by Sushi Tailwindcss</Footer>
      </Layout>
    </Layout>
  );
};

export const CustomSiderExample = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed((c) => !c);
  };
  return (
    <Layout className="bg-gray-200">
      <Sider collapsible trigger={null} className="bg-indigo-900" collapsed={collapsed}>
        <div className="w-full p-3">
          <div className="bg-white h-30px"></div>
        </div>
        <Menu
          collapsed={collapsed}
          className="text-white"
          defaultOpenKeys={["subnav1"]}
          items={[
            { label: "Option 1", key: "option1", itemIcon: <Icon name="pie_chart" /> },
            { label: "Option 2", key: "option2", itemIcon: <Icon name="desktop_windows" /> },
            {
              label: "User",
              key: "user",
              itemIcon: <Icon name="person_outline" />,
              children: [
                { label: "Tom", key: "tom" },
                { label: "Bill", key: "bill" },
                { label: "Alex", key: "alex" },
              ],
            },
          ]}
        ></Menu>
      </Sider>
      <Layout>
        <Header>
          <Icon name="menu_open" onClick={onCollapse} className="cursor-pointer" size="text-xl" />
        </Header>
        <Content className="flex-col px-6">
          <Breadcrumb routes={[{ label: "User", href: "/" }, { label: "Bill" }]} className="py-3"></Breadcrumb>
          <div className="p-6 bg-white h-300px">Content</div>
        </Content>
        <Footer className="p-7 text-center">Sushi Design &copy; Created by Sushi Tailwindcss</Footer>
      </Layout>
    </Layout>
  );
};

export const ResponsiveExample = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (c: boolean) => {
    setCollapsed(c);
  };
  return (
    <Layout className="bg-gray-200">
      <Sider collapsible className="bg-indigo-900" breakpoint="md" collapsedWidth="0" collapsed={collapsed} onCollapse={onCollapse}>
        <div className="w-full p-3">
          <div className="bg-white h-30px"></div>
        </div>
        <Menu
          collapsed={collapsed}
          className="text-white"
          defaultOpenKeys={["subnav1"]}
          items={[
            { label: "Option 1", key: "option1", itemIcon: <Icon name="pie_chart" /> },
            { label: "Option 2", key: "option2", itemIcon: <Icon name="desktop_windows" /> },
            {
              label: "User",
              key: "user",
              itemIcon: <Icon name="person_outline" />,
              children: [
                { label: "Tom", key: "tom" },
                { label: "Bill", key: "bill" },
                { label: "Alex", key: "alex" },
              ],
            },
          ]}
        ></Menu>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content className="flex-col px-6">
          <Breadcrumb routes={[{ label: "User", href: "/" }, { label: "Bill" }]} className="py-3"></Breadcrumb>
          <div className="p-6 bg-white h-300px">Content</div>
        </Content>
        <Footer className="p-7 text-center">Sushi Design &copy; Created by Sushi Tailwindcss</Footer>
      </Layout>
    </Layout>
  );
};
