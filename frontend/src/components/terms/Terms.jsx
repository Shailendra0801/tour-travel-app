import React from 'react'

export default function Terms() {
  return (
    <div className='FLEX flex-col mb-20'>
        <div className="text-4xl h-48 flex items-end justify-center mb-10 underline">
            Terms and Conditions
        </div>

        <div className='w-11/12 text-start space-y-4'>

            <p className='text-xl'>Packages, and other related activities. By using our services, you agree to comply with and be bound by the following terms. Please read these terms carefully before making a reservation.</p>
            
            <div>
                <h1 className='text-xl font-bold'>1.Booking and Reservations</h1>
                <ol style={{listStyleType: "upper-alpha" }} className='list-inside' > 
                    <li> All bookings must be made through our website, over the phone, or in person at our office.</li>
                    <li>The booking will be confirmed only once 25% payment is received and processed.</li>
                    <li>Prices are subject to change without prior notice. However, once the booking is confirmed, the price will remain fixed.</li>
                </ol>
            </div>
            <div>
                <h1 className='text-xl font-bold'>2. Payment</h1>
                <ol style={{listStyleType: "upper-alpha" }} className='list-inside'>
                    <li> We accept payments via credit card, debit card, bank transfer, and other payment methods as specified on our website. </li>
                    <li>Failure to make the full payment by the due date may result in the cancellation of your booking.</li>
                </ol>
            </div>
            <div>
                <h1 className='text-xl font-bold'>3. Cancellations and Refunds</h1>
                <ol style={{listStyleType: "upper-alpha" }} className='list-inside'>
                    <li> Cancellations made 2 days or more before the tour departure will receive a 80% refund. </li>
                    <li>50% refunds will be issued for cancellations on the day of departure.</li>
                    <li>Refunds, if applicable, will be processed within 2 business days after approval.</li>
                </ol>
            </div>

            <div>
                <h1 className='text-xl font-bold'>4. Travel Insurance</h1>
                <ol style={{listStyleType: "upper-alpha" }} className='list-inside'>
                    <li> We strongly recommend that all travelers obtain comprehensive travel insurance to cover unforeseen circumstances such as cancellations, medical emergencies, lost luggage, etc.</li>
                    <li>Travel insurance is not included in the tour package, and it is the responsibility of the traveler to arrange coverage.</li>
                </ol>
            </div>
            <div>
                <h1 className='text-xl font-bold'>5. Customer Responsibilities</h1>
                <ol style={{listStyleType: "upper-alpha" }} className='list-inside'>
                    <li> Customers must adhere to all local laws, customs, and regulations during the tour.</li>
                    <li>We are not responsible for any delays, losses, or issues arising from the traveler’s failure to comply with local laws or provide necessary documents.</li>
                </ol>
            </div>
            <div>
                <h1 className='text-xl font-bold'>6. Health and Safety</h1>
                <ol style={{listStyleType: "upper-alpha" }} className='list-inside'>
                    <li> Customers are advised to assess their health and fitness level before booking any tour.</li>
                    <li>In case of any pre-existing health conditions, customers should inform us at the time of booking so that we can assist in determining whether the tour is suitable.</li>
                    <li>We take every precaution to ensure the safety of our travelers, but we are not liable for any accidents, injuries, or losses that may occur during the trip.</li>
                </ol>
            </div>
            <div>
                <h1 className='text-xl font-bold'>7. Limitation of Liability</h1>
                <ol style={{listStyleType: "upper-alpha" }} className='list-inside'>
                    <li> Our liability is limited to the amount paid by the customer for the tour package. We are not liable for any indirect or consequential damages, including loss of enjoyment, emotional distress, or financial loss.</li>
                    <li>We are not responsible for any third-party services provided during the tour.</li>
                </ol>
            </div>

            <div>
                <h1 className='text-xl font-bold'>8. Force Majeure</h1>
                <ol style={{listStyleType: "upper-alpha" }} className='list-inside'>
                    <li> We will not be held liable for failure to provide services or delays caused by events outside our control, including but not limited to natural disasters, pandemics, political instability, strikes, or any other unforeseen circumstances.</li>
                </ol>
            </div>

            <div>
                <h1 className='text-xl font-bold'>9. Governing Law</h1>
                <ol style={{listStyleType: "upper-alpha" }} className='list-inside'>
                    <li> These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles</li>
                    <li> Any disputes arising out of or in connection with these Terms and Conditions shall be resolved through arbitration/mediation  in Nainital.</li>
                </ol>
            </div>

            <div>
                <h1 className='text-xl font-bold'>10. Amendments to Terms and Condition</h1>
                <ol style={{listStyleType: "upper-alpha" }} className='list-inside'>
                    <li>We reserve the right to modify or update these Terms and Conditions at any time. All changes will be posted on our website, and the updated version will apply to all bookings made after the date of posting .</li>
                </ol>
            </div>
        </div>

    </div>
)
}
