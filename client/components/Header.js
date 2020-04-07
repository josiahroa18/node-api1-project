import Link from 'next/link';
import { HeaderContainer, Anchor, Title } from '../Styles';

const Header = () => {
    return(
        <HeaderContainer>
            <Title>View Users</Title>
            <nav>
                <Link href='/'>
                    <Anchor>View Users</Anchor>
                </Link>
                <Link href='/add-user'>
                    <Anchor>Add User</Anchor>
                </Link>
            </nav>
        </HeaderContainer>
    );
}

export default Header;