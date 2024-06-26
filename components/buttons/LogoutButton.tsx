import {signOut} from '@/app/(unauthenticated)/(auth)/logout/actions'

export default function LogoutButton() {
    return(
        <form action={signOut}>
            <button type='submit'>
                Logout
            </button>
        </form>
    )
}