import { CardProps } from "@/types/types";
import styles from "./details-card.module.scss";

const DetailsCard = ({ userData }: CardProps) => {
  return (
    <div className={styles["details-card"]}>
      <div>
        <p>Personal Information</p>
        <div>
          <div>
            <p>full Name</p>
            <p>{userData?.userName}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{userData?.phoneNumber}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>{userData?.email}</p>
          </div>
          <div>
            <p>Bvn</p>
            <p>{userData?.bvn}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{userData?.gender}</p>
          </div>
          <div>
            <p>Marital status</p>
            <p>{userData?.maritalStatus}</p>
          </div>
          <div>
            <p>Children</p>
            <p>{userData?.numberOfChildren}</p>
          </div>
          <div>
            <p>Type of residence</p>
            <p>Home</p>
          </div>
        </div>
      </div>
      <div>
        <p>Education and Employment</p>
        <div>
          <div>
            <p>level of education</p>
            <p>{userData?.levelOfEducation}</p>
          </div>
          <div>
            <p>employment status</p>
            <p>{userData?.employmentDetails.status}</p>
          </div>
          <div>
            <p>sector of employment</p>
            <p>{userData?.employmentDetails.sector}</p>
          </div>
          <div>
            <p>Duration of employment</p>
            <p>{userData?.employmentDetails.duration} years</p>
          </div>
          <div>
            <p>office email</p>
            <p>{userData?.employmentDetails.email}</p>
          </div>
          <div>
            <p>Monthly income</p>
            <p>₦{userData?.employmentDetails.income}</p>
          </div>
          <div>
            <p>loan repayment</p>
            <p>₦{userData?.employmentDetails.status}</p>
          </div>
        </div>
      </div>
      <div>
        <p>Socials</p>
        <div>
          <div>
            <p>Twitter</p>
            <p>{userData?.socials.twitter}</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>{userData?.socials.facebook}</p>
          </div>
          <div>
            <p>Instagram</p>
            <p>{userData?.socials.instagram}</p>
          </div>
        </div>
      </div>
      <div>
        <p>Guarantor</p>
        <div>
          <div>
            <p>full Name</p>
            <p>{userData?.guarantor.fullName}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{userData?.guarantor.phone}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>{userData?.guarantor.email}</p>
          </div>
          <div>
            <p>Relationship</p>
            <p>{userData?.guarantor.relationship}</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>full Name</p>
            <p>{userData?.guarantor.fullName}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{userData?.guarantor.fullName}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>{userData?.guarantor.fullName}</p>
          </div>
          <div>
            <p>Relationship</p>
            <p>{userData?.guarantor.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
