/*import './ContactForm.css'

export default function ContSecond(){
    
    return(
        <>
            <div className ="firstHalf">
                    <h3>Say Hello!</h3>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input type="email" class="form-control custom-border" id="exampleFormControlInput1" placeholder="Enter Name"/>
                    </div>

                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                    <input type="email" class="form-control custom-border" id="exampleFormControlInput1" placeholder="+63"/>
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control custom-border" id="exampleFormControlInput1" placeholder="@"/>
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control custom-border" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Message"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary" style={{backgroundColor: "#116A7B"}}>Submit</button>

                </div>
                <div className = "secondHalf">
                    <div className = "tBody">
                        <h2>FAQs</h2>
                        <p>To get the information you need, browse  our Frequently Asked Questions list.</p>
                        <a href="/faqs" className="visit-link">Visit FAQs &gt;</a>
                    </div>
                    <div className = "tBody">
                        <h2>Chat Us*</h2>
                        <p>Have an urgent question that needs to be answered? That's why we are here.</p>
                        <a href="/faqs" className="visit-link">Chat Now &gt;</a>
                    </div>
                    <div className = "tBody">
                        <h2>Call Us*</h2>
                        <p>For an in-person conversation, please give us a call at 123-4567-890.</p>
                        <a href="/faqs" className="visit-link">Call Us &gt;</a>
                    </div>
                    <div className = "tBody">
                        <h2>Support email</h2>
                        <a href="/faqs" className="visit-link">support@smartdelivery.com</a>
                    </div>
                   

                    



                </div>
        
        
        </>

    )
}