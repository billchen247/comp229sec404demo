type UserProfile = {
  name: string
  age: string
}

type ProfileCardProps = {
  profile: UserProfile
  isActive: boolean
}

function ProfileCard({ profile, isActive }: ProfileCardProps) {
  return (
    <div
      className="counter"
      style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
    >
      <h3>Profile Card</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  )
}

export default ProfileCard
