import { Avatar, Button, Nav } from '@douyinfe/semi-ui';
import {
  IconSemiLogo,
  IconBell,
  IconHelpCircle,
  IconHome,
} from '@douyinfe/semi-icons';
import { headerClass, iconClass } from '@/components/Header/index.css';

export default () => {
  return (
    <div className={headerClass}>
      <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
        <Nav.Header style={{ marginRight: 96 }}>
          <IconSemiLogo style={{ fontSize: 36 }} />
        </Nav.Header>
        <Nav.Item itemKey="Home" text="首页" icon={<IconHome size="large" />} />
        <Nav.Footer>
          <Button
            className={iconClass}
            theme="borderless"
            icon={<IconBell size="large" />}
          />
          <Button
            className={iconClass}
            theme="borderless"
            icon={<IconHelpCircle size="large" />}
          />
          <Avatar color="orange" size="small">
            YJ
          </Avatar>
        </Nav.Footer>
      </Nav>
    </div>
  );
};
