---
sidebar_position: 1
---

# Mission Definition Review: SR-1

**Document Ref:** OMSA-SR-1-MDR  
**Program:** Early Sounding Rockets  
**Vehicle:** Skybreaker I  
**Target Launch:** February 1951

:::info STATUS: MISSION APPROVED
:::

## 1. Mission Overview
### 1.1 Strategic Context
SR-1 "First Spark" is the first launch of the new agency, laying the foundations for the **Early Sounding Rockets** campaign - 
and aiming to complete the first contract in the Early Sounding Rockets program.  
It will be the first test of the **Skybreaker I** vehicle and, if the launch is successful, will gather initial pressure/temperature data from the lower atmosphere and validate our aerodynamic models for future high-altitude Kármán line attempts.

### 1.2 Mission Objectives
Objectives are tiered to allow for partial mission success analysis.

| Tier | Criteria | Source/Justification |
| :--- | :--- | :--- |
| **Threshold** (Min) | **Altitude > 10,000 m** | [cite_start]Minimum safe altitude to verify aerodynamic stability in the transonic regime[cite: 12, 25]. |
| **Objective** (Target) | **Altitude > 15,000 m** | [cite_start]Desired apogee for Low-Atmos science data collection[cite: 64]. |
| **Stretch** (Bonus) | **Validate High-Alt Models** | [cite_start]Any altitude >15km provides data to refine our drag loss estimates ($D=0.2$) for future launches[cite: 13]. |

---

## 2. Requirements & Constraints
### 2.1 Trajectory & Safety
* [cite_start]**Impact Zone:** Trajectory must carry the vehicle away from the Launch Complex into unpopulated areas (Downrange Safety)[cite: 26, 27].
* **Launch Azimuth:** East/South-East (over water/desert).
* [cite_start]**Stability:** Rate of Climb must be positive and high; vehicle must remain stable without active guidance (Spin Stabilization)[cite: 11, 55].

### 2.2 Payload & Avionics
* [cite_start]**Instrumentation:** Barometer & Temperature Sensor (Low Atmos Science)[cite: 35].
* [cite_start]**Power:** Internal battery capacity must exceed **2x expected mission length** to ensure telemetry during pre-launch holds[cite: 31].
* [cite_start]**Telemetry:** Continuous downlink required (No onboard storage)[cite: 32].

### 2.3 Preliminary Analysis (The Math)
* **Design Goal:** Calculate required vehicle performance to hit exactly 15km apogee using the Energy Approximation method.
* **Assumptions:** Drag Factor $D=0.2$ (Slender body), Burn Time $t=50s$.

| Variable | Value | Derivation |
| :--- | :--- | :--- |
| **Target Apogee ($h$)** | 15,000 m | [cite_start]Mission Objective [cite: 64] |
| **Required Burnout Velocity** | 542 m/s | t  |
| **Gravity Losses** | 490 m/s | [cite_start]$g \times 50s$ Burn Time [cite: 43] |
| **Net $\Delta v$ Required** | 1,032 m/s | Velocity + Gravity Loss |
| **Drag Efficiency ($1-D$)** | 80% | [cite_start]$D=0.2$ [cite: 44] |
| **Total Design $\Delta v$** | **1,290 m/s** | t / 0.8$ |

* **Conclusion:** The vehicle requires **~1,290 m/s** of vacuum Delta-V to reliably reach 15km.
* [cite_start]**Cost Constraint:** Total vehicle cost must remain **< 500 Funds** to ensure program sustainability[cite: 57].

---

## 3. Concept of Operations (ConOps)
[cite_start]The mission profile consists of four distinct phases following a standard ballistic trajectory[cite: 83].



**Phase I: Ground & Launch**
* Vehicle is rail-launched (85° Azimuth) to ensure downrange impact.
* [cite_start]**Critical Event:** Rapid acceleration required to achieve aerodynamic stability (fin authority) before clearing the launch tower[cite: 88].

**Phase II: Unpowered Ascent (Coast)**
* [cite_start]Immediately following burnout (~T+50s), the vehicle coasts through the dense lower atmosphere[cite: 90].
* [cite_start]**Stability:** The vehicle must rely on passive spin-stabilization to minimize dispersion (weathercocking) due to wind shear[cite: 92].

**Phase III: The Science Window (Apogee)**
* [cite_start]Near apogee (where velocity is lowest), the payload conducts high-frequency sampling of atmospheric pressure and temperature[cite: 96].

**Phase IV: Termination**
* Vehicle is non-recoverable. [cite_start]Loss of Signal (LOS) is expected prior to impact[cite: 99].

---

## 4. Risk Assessment
* [cite_start]**Launch Stability:** High TWR required to clear tower, but high TWR increases drag losses[cite: 133].
* **Communication:** Link budget analysis required to ensure signal integrity at apogee.
* **Weather:** Launch prohibited if ground winds > 5 m/s due to weathercocking risk.
