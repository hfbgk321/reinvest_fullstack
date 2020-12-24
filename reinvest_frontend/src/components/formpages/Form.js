import React, { Component } from 'react'

import React from 'react'

const Form = () => {
    return (
        <>
            <div id="">
            <h1 class="formTitle">Property Information</h1>
                <form>
                <div class="formInputNames">Street address</div>
                <input type="text" class="piinput"></input>
                <br></br>
                <article>
                    <section>
                    <div class="formInputNames">City</div>
                    <input type="text" class="piinput"></input>
                    </section>
                    <section>
                    <div class="formInputNames">State </div>
                    <input type="text" class="piinput"></input>
                    </section>
                    <section>
                    <div class="formInputNames">Zip Code</div>
                    <input type="text" class="piinput"></input> <br></br>
                    </section>
                </article>
                <article>
                    <section>
                    <div class="formInputNames">Bedrooms</div>
                    <input type="text" class="piinput"></input>
                    </section>
                    <section>
                    <div class="formInputNames">Bathrooms </div>
                    <input type="text" class="piinput"></input>
                    </section>
                    <section>
                    <div class="formInputNames">Sq. Ft.</div>
                    <input type="text" class="piinput"></input> <br></br>
                    </section>
                </article>
                <div class="formInputNames">Year Build</div>
                <input type="text" class="piinput"></input> <br></br>
                <div class="formInputNames">Description</div>
                <textarea></textarea>
                <div class="space"></div>
                </form>
            </div>

            <div id="">
                
            </div>

            <div id="">
                
            </div>

            <div id="">
                
            </div>

            <div id="">
                
            </div>
        </>
    )
}

export default Form;
