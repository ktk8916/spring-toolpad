import * as React from 'react';
import {Outlet} from 'react-router';
import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import {PageContainer} from '@toolpad/core/PageContainer';


export default function Layout() {


  return (
    <DashboardLayout slots={{toolbarActions: ToolbarIcon}}>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}

function ToolbarIcon() {
  return (
  <div>로그인한유저표시
  </div>
  )
}
